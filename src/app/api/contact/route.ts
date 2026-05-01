// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { firstName, lastName, number, email, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: `Apex Survey <${process.env.GMAIL_USER}>`,
//       to: [process.env.GMAIL_USER || "hassan.uos.82@gmail.com"],
//       subject: `New Contact Form Submission from ${firstName} ${lastName}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
//           <div style="background-color: #002D5B; padding: 20px; text-align: center;">
//             <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Inquiry</h1>
//           </div>
//           <div style="padding: 30px; background-color: #ffffff;">
//             <p style="font-size: 16px; color: #333333;">You have received a new message from your website contact form.</p>
            
//             <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
//               <tr>
//                 <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 30%;">Name:</td>
//                 <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${firstName} ${lastName}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Phone:</td>
//                 <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${number}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Email:</td>
//                 <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">
//                   <a href="mailto:${email}" style="color: #002D5B; text-decoration: none;">${email}</a>
//                 </td>
//               </tr>
//             </table>

//             <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #002D5B; border-radius: 4px;">
//               <p style="font-weight: bold; margin-top: 0; color: #002D5B;">Message:</p>
//               <p style="margin-bottom: 0; color: #555555; white-space: pre-wrap;">${message}</p>
//             </div>
//           </div>
//           <div style="background-color: #f1f1f1; padding: 15px; text-align: center; color: #777777; font-size: 12px;">
//             <p style="margin: 0;">&copy; ${new Date().getFullYear()} Apex Survey. All rights reserved.</p>
//           </div>
//         </div>
//       `,
//     });

//     return NextResponse.json({ success: true, data: info });
//   } catch (error) {
//     console.error("Contact API error:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, number, email, message } = await req.json();

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          firstName,
          lastName,
          number,
          email,
          message,
          to_email: process.env.EMAILJS_TO_EMAIL || "hassan.uos.82@gmail.com",
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS error:", errorText);
      return NextResponse.json({ error: errorText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
