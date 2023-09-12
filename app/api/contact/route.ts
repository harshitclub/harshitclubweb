import { sendEmail } from "@/helpers/mailer";
import { NextRequest, NextResponse } from "next/server";

// connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { name, email, phone, website, country, company, reason, message } =
      reqBody;

    await sendEmail({
      name: name,
      email: email,
      phone: phone,
      website: website,
      country: country,
      company: company,
      reason: reason,
      message: message,
    });
    return NextResponse.json({
      message: "Message Sent",
      success: true,
      // savedContact,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
