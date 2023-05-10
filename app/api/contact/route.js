import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contact";

export async function POST(req, res) {
  try {
    const body = await req.json();

    await dbConnect();

    await Contact.create(body);
    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
