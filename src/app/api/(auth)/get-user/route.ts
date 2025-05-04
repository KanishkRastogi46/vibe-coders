import userModel from "@/models/users.model";
import dbConnect from "@/lib/dbConnect";
import {verify} from "jsonwebtoken";
import {NextRequest} from "next/server";


export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value || request.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return Response.json({
      message: "Token not provided",
      status: 401,
      success: false,
    }, {status: 401});
  }

  try {
    await dbConnect();

    const decoded = verify(token, process.env.JWT_SECRET as string) as {id: string};
    await dbConnect();
    const user = await userModel.findById(decoded.id).select("-password -__v");

    if (!user) {
      return Response.json({
        message: "User not found",
        status: 401,
        success: false,
      }, {status: 401});;
    }

    return Response.json({
      message: "User found",
      user,
      status: 200,
      success: false,
    }, {status: 200});

  } catch (error) {
    console.error("Error verifying token:", error);
    return new Response(JSON.stringify({error: "Invalid token"}), {status: 401});
  }
}