// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      console.warn("Contact form submission: Missing required fields.");
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn("Contact form submission: Invalid email format.");
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Or your verified domain email
      to: 'ajayvishwakarma2k21@gmail.com',
      subject: `New Contact from Portfolio: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`
    });

    if (error) {
      console.error('Error sending email via Resend:', error);
      return NextResponse.json(
        // Safely access error.message if it exists, otherwise provide a fallback
        { error: "Failed to send email.", details: error.message || "Unknown Resend error" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });

  } catch (err: unknown) { // <--- CHANGE IS HERE: Use 'unknown' instead of 'any'
    console.error('Unexpected error in contact API route:', err);

    let errorMessage = "An unexpected server error occurred.";
    if (err instanceof Error) { // <--- Type narrowing: Check if 'err' is an instance of Error
      errorMessage = err.message;
    } else if (typeof err === 'string') { // Check if it's a string
      errorMessage = err;
    }
    // You could add more checks for other types if needed

    return NextResponse.json(
      { error: errorMessage, details: "Please try again later." }, // Changed details for security
      { status: 500 }
    );
  }
}
