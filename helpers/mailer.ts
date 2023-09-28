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
      name: "mail.harshitclub.com",
      host: "mail.harshitclub.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Harshit Kumar" <contact@harshitclub.com>`,
      to: "harshit@harshitclub.com",
      cc: ["harshitclub@gmail.com", "gautamharshit41@gmail.com"],
      subject: "Website Contact Form",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Please activate your account</title>
        <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
      </head>
      
      <body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
        <table role="presentation"
          style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
          <tbody>
            <tr>
              <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
                <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
                  <tbody>
                    <tr>
                      <td style="padding: 40px 0px 0px;">
                        <div style="text-align: left;">
                          <!---->
                        </div>
                        <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                          <div style="color: rgb(0, 0, 0); text-align: left;">
                            <h1 style="margin: 1rem 0">harshitclub.com | Contact</h1>
                            <p style="padding-bottom: 16px">NAME: ${name}</p>
                            <p style="padding-bottom: 16px">EMAIL: ${email}</p>
                            <p style="padding-bottom: 16px">PHONE: ${phone}</p>
                            <p style="padding-bottom: 16px">WEBSITE: ${website}</p>
                            <p style="padding-bottom: 16px">COUNTRY: ${country}</p>
                            <p style="padding-bottom: 16px">COMPANY: ${company}</p>
                            <p style="padding-bottom: 16px">REASON: ${reason}</p>
                            <p style="padding-bottom: 16px">MESSAGE: ${message}</p>
                          </div>
                        </div>
                        <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      
      </html>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
