import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, countryCode, number, message } = body;

    // Create a Nodemailer transporter using SMTP
    // You'll need to configure these environment variables in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || '"Contact Form" <noreply@example.com>',
      to: 'einvoicing@mnrdxb.com', // Destination email address
      subject: `New Contact Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${countryCode}${number}
Message: ${message}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode}${number}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const senderMailOptions = {
      from: process.env.SMTP_USER || '"Contact Form" <noreply@example.com>',
      to: email, // Sender's email address
      subject: `Thank you for contacting us, ${name}`,
      text: `
Hi ${name},

Thank you for reaching out to us. We have received your message and will get back to you shortly.

Here is a copy of your message:
Message: ${message}

Best regards,
MNR DXB Team
      `,
      html: `
        <h3>Thank you for reaching out!</h3>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <br/>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,</p>
        <p>MNR DXB Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(senderMailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
