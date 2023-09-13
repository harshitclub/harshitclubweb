import nodemailer from "nodemailer";

interface ContactProps {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  country?: string;
  company?: string;
  reason?: string;
  message?: string;
}

export const sendEmail = async ({
  name,
  email,
  phone,
  website,
  country,
  company,
  reason,
  message,
}: ContactProps) => {
  try {
    var transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Harshit Kumar" <gautamharshit538@gmail.com>`,
      to: "harshit@harshitclub.com",
      subject: "Website Contact Form",
      html: `
                  <html>
                  <body>
                  <p>Name: ${name}<p>
                  <p>Email: ${email}<p>
                  <p>Phone: ${phone}<p>
                  <p>Website: ${website}<p>
                  <p>Country: ${country}<p>
                  <p>Company: ${company}<p>
                  <p>Reason: ${reason}<p>
                  <p>Message: ${message}<p>
                  </body>
                  </html>
                  `,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
