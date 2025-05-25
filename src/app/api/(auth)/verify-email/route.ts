import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import userModel from "@/models/users.model";

export async function POST(request: Request) {
    try {
        await dbConnect();

        const { email } = await request.json();
        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const findUser = await userModel.findOne({ email });
        if (!findUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        if (findUser.isVerified) {
            return NextResponse.json({ message: "Email is already verified" }, { status: 200 });
        }

        findUser.isVerified = true;
        await findUser.save();
        return NextResponse.json({ message: "Email verified successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error verifying email:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}