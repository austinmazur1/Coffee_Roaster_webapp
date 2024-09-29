import { connectDB } from "@/packages/server-only/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import Beans from "@/packages/server-only/models/Beans";

export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectDB();
  try {
    const beans = await Beans.find({}).exec();
    console.log('beans',beans)
    return NextResponse.json({
      success: true,
      data: beans,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error?.message,
    });
  }
};
