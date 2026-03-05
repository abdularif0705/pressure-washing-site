import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // Check for API key to prevent build crashes on Vercel before the user adds the key
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Contact form submission simulated.");
      return NextResponse.json({ success: true, simulated: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, phone, address, service, details } = body;

    // Validate input basic fields
    if (!name || !phone || !address || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Pressure Pro Website <onboarding@resend.dev>', // Use a verified domain or resend's onboarding domain for testing
      to: ['delivered@resend.dev'], // Send to the user's email or a test email
      subject: `New Estimate Request from ${name}`,
      html: `
        <h2>New Exterior Cleaning Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Additional Details:</strong> ${details || 'None provided.'}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send estimate request. Please try again later.' },
      { status: 500 }
    );
  }
}
