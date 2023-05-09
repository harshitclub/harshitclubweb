import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contact";

export async function GET(req, res) {
  try {
    await dbConnect();

    const messages = await Contact.find();

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
