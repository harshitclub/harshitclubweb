// import { NextResponse } from "next/server";

// import dbConnect from "@/utils/dbConn";
// import Contact from "@/models/contact";
// import { useRouter } from "next/router";

// export async function GET(req, res) {
//   try {
//     const router = useRouter();
//     const { id } = router.query;
//     await dbConnect();

//     const message = await Contact.findById({ id: id });
//     return NextResponse.json({ message });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
