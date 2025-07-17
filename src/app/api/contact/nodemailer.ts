
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from 'resend';

const resend = new Resend('re_Bp3BXL16_DAM2PzY8pv8kUX4Sww91mhB9');

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <ajayvishwakarma2k21@gmail.com>',
      to: 'ajayvishwakarma2k21@gmail.com',
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
