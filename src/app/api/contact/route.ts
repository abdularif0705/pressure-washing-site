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
    const { name, phone, address, service, details, recaptchaToken } = body;

    // Validate input basic fields
    if (!name || !phone || !address || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Please complete the reCAPTCHA verification' },
        { status: 400 }
      );
    }

    // 3. Verify reCAPTCHA with Google
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error("❌ RECAPTCHA_SECRET_KEY not configured");
      return NextResponse.json(
        { error: 'reCAPTCHA not configured on server' },
        { status: 500 }
      );
    }

    try {
      const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${recaptchaSecret}&response=${recaptchaToken}`
      });
      
      const recaptchaResult = await recaptchaResponse.json();
      
      if (!recaptchaResult.success) {
        console.error("❌ reCAPTCHA verification failed:", recaptchaResult);
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
      console.log("✅ reCAPTCHA verified successfully");
    } catch (err) {
      console.error("reCAPTCHA fetch error:", err);
      return NextResponse.json(
        { error: 'Network error verifying reCAPTCHA' },
        { status: 500 }
      );
    }

    // Send the email using Resend
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Lead Request</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e4e4e7; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    
    <!-- Header -->
    <div style="background-color: #18181b; color: #ffffff; padding: 30px; text-align: center; border-bottom: 4px solid #d97706;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">New Quote Request</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px;">
      <p style="margin-top: 0; margin-bottom: 25px; font-size: 16px; color: #3f3f46;">
        Hello Team, you have a new quote request from <strong style="color: #18181b;">${name}</strong>.
      </p>

      <!-- Contact Info Section -->
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 14px; text-transform: uppercase; color: #71717a; font-weight: 600; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #e4e4e7; padding-bottom: 8px;">Contact Information</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Name:</td>
            <td style="padding: 8px 0; color: #3f3f46;">${name}</td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Phone:</td>
            <td style="padding: 8px 0; color: #3f3f46;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Email:</td>
            <td style="padding: 8px 0; color: #3f3f46;"><a href="mailto:hello@pressurepro.com" style="color: #2563eb; text-decoration: none;">hello@pressurepro.com</a></td>
          </tr>
        </table>
      </div>

      <!-- Service Details Section -->
      <div style="margin-bottom: 10px;">
        <h2 style="font-size: 14px; text-transform: uppercase; color: #71717a; font-weight: 600; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #e4e4e7; padding-bottom: 8px;">Service Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Address:</td>
            <td style="padding: 8px 0; color: #3f3f46;">${address}</td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Service:</td>
            <td style="padding: 8px 0; color: #3f3f46;"><span style="background-color: #fef3c7; padding: 4px 8px; border-radius: 4px; color: #b45309; font-weight: 600; font-size: 14px;">${service}</span></td>
          </tr>
          <tr>
            <td style="width: 120px; padding: 8px 0; font-weight: 600; color: #18181b;">Details:</td>
            <td style="padding: 8px 0; color: #3f3f46;">${details || 'None provided'}</td>
          </tr>
        </table>
      </div>
      
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 20px; text-align: center; color: #71717a; font-size: 12px; border-top: 1px solid #e4e4e7;">
      This email was automatically generated from the Pressure Pro contact form.<br>
      &copy; ${new Date().getFullYear()} Pressure Pro.
    </div>
    
  </div>
</body>
</html>
    `;

    const data = await resend.emails.send({
      from: 'Pressure Pro Website <onboarding@resend.dev>',
      to: ['5starealtor@gmail.com'],
      subject: `New Quote Request from ${name}`,
      html: htmlContent,
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
