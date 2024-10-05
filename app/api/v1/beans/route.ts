import { connectDB } from "@/packages/server-only/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import Beans from "@/packages/server-only/models/Beans";

export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectDB();
  try {
    const beans = await Beans.find({}).populate("roaster").lean();
    const dataToSend = beans.map((bean) => ({
      ...bean,
      roaster: {
        ...bean?.roaster,
        id: bean?.roaster?._id.toString?.(),
      },
    }));
    return NextResponse.json({
      success: true,
      data: dataToSend,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error?.message,
    });
  }
};
