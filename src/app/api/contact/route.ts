import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, number, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Apex Survey <onboarding@resend.dev>",
      to: ["034217602ab@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #002D5B; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Inquiry</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333333;">You have received a new message from your website contact form.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${number}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="color: #002D5B; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>

            <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #002D5B; border-radius: 4px;">
              <p style="font-weight: bold; margin-top: 0; color: #002D5B;">Message:</p>
              <p style="margin-bottom: 0; color: #555555; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f1f1f1; padding: 15px; text-align: center; color: #777777; font-size: 12px;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Apex Survey. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
