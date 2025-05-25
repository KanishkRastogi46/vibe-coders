import { createTransport } from "nodemailer";
import { render, pretty } from "@react-email/render";
import VerificationEmail from "@/emails/verification-email";

interface SendVerificationEmailProps {
  email: string;
  name: string;
}

export default async function sendVerificationEmail({
  email,
  name
}: SendVerificationEmailProps) {
  const verificationLink = `${String(process.env.NEXT_PUBLIC_APP_URL)}/verify?email=${encodeURIComponent(email)}`;

  // Create a transporter object
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use false for STARTTLS; true for SSL on port 465
    auth: {
      user: String(process.env.SENDER_EMAIL),
      pass: String(process.env.SENDER_EMAIL_PASSWORD),
    }
  });

  try {
    const emailHtml = await pretty(await render(
      VerificationEmail({
        verificationLink,
        name
      })
    ));

    // Configure the mailoptions object
    const mailOptions = {
      from: String(process.env.SENDER_EMAIL),
      to: email,
      subject: 'Account Verification for AutoDev',
      html: emailHtml
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending verification email:", error);
    return { success: false, error };
  }
}; 