// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from 'resend';

// Ensure the API key is available during the build and runtime.
// If process.env.RESEND_API_KEY is undefined, this will throw an error early,
// which is good for catching misconfigurations during development/build.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // 1. Parse the request body
    const { name, email, message } = await req.json();

    // 2. Basic input validation
    if (!name || !email || !message) {
      console.warn("Contact form submission: Missing required fields.");
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    // Basic email format validation (optional but recommended)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn("Contact form submission: Invalid email format.");
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // 3. Send email using Resend
    // Important: The 'from' email address must be a domain you have verified with Resend.
    // 'onboarding@resend.dev' is a common testing sender if you don't have a verified domain yet.
    // Replace 'ajayvishwakarma2k21@gmail.com' with your actual verified domain email if possible,
    // or use a placeholder like 'onboarding@resend.dev' if testing.
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use a verified domain or onboarding@resend.dev
      to: 'ajayvishwakarma2k21@gmail.com', // Your recipient email
      subject: `New Contact from Portfolio: ${name}`, // More descriptive subject
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`
    });

    // 4. Handle Resend API response
    if (error) {
      console.error('Error sending email via Resend:', error);
      // Return a more specific error message from Resend if available
      return NextResponse.json(
        { error: "Failed to send email.", details: error.message || "Unknown Resend error" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });

  } catch (err: any) {
    // 5. Handle unexpected errors during the process
    console.error('Unexpected error in contact API route:', err);

    // Provide a generic error message to the client for security
    return NextResponse.json(
      { error: "An unexpected server error occurred.", details: err.message || "Please try again later." },
      { status: 500 }
    );
  }
}
