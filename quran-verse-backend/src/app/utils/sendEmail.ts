import nodemailer from "nodemailer";
import config from "../config";

export const sendEmail = async (payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email_user,
      pass: config.email_pass,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${config.email_user}>`,
    to: config.email_user,
    subject: "New Contact Message 🚀",
    html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9fafb;">
    
    <h2 style="color: #16a34a; margin-bottom: 10px;">
      📩 New Contact Message
    </h2>

    <p style="color: #555; margin-bottom: 20px;">
      You received a new message from your portfolio website.
    </p>

    <div style="background: #ffffff; padding: 15px 20px; border-radius: 10px; border: 1px solid #eee;">
      
      <p><strong>👤 Name:</strong> ${payload.name || "Not provided"}</p>

      <p><strong>📧 Email:</strong> ${payload.email || "Not provided"}</p>

      <p><strong>📱 Phone:</strong> ${payload.phone || "Not provided"}</p>

      <hr style="margin: 15px 0; border: none; border-top: 1px solid #eee;" />

      <p style="margin-bottom: 5px;"><strong>💬 Message:</strong></p>

      <div style="padding: 10px; background: #f3f4f6; border-radius: 6px; color: #333;">
        ${payload.message}
      </div>

    </div>

    <p style="margin-top: 20px; font-size: 12px; color: #999;">
      🚀 Sent from your portfolio contact form
    </p>

  </div>
`,
  });
};
