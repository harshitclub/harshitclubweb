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
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_USER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "harshitclub@outlook.com",
      to: "harshitclub@gmail.com",
      subject: "harshitclub Contact",
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
