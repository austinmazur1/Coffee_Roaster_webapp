import type { NextApiRequest, NextApiResponse } from "next";

import Roaster from "@/models/Roasters";
import { RoasterType } from "@/types/roasterTypes";
import { beanFormSchema } from "@/schemas/beanFormSchema";
import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils/connectDB";
import Beans from "@/models/Beans";

export async function GET(req: Request) {
  try {
    await connectDB();
    const roasters = await Roaster.find({});
    return Response.json(roasters);
  } catch (error) {
    console.log("ERR", error);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();
  const data: { [key: string]: any } = {};

  formData.forEach((value, key) => (data[key] = value));

  const parsed = beanFormSchema.safeParse(data);

  if (parsed.success) {
    const parsedData = parsed.data;
    const {roaster, ...beanData} = parsedData
    const foundRoaster = await Roaster.findById(roaster);

    if (!roaster) {
      return NextResponse.status(404).json({ message: "Roaster not found" });
    }
    const bean = new Beans(beanData);
    await bean.save();

    // Add the bean's ID to the roaster's beans array and save
    foundRoaster.beans.push(bean._id);
    await foundRoaster.save();

    return NextResponse.json(
      { message: "data validation and parsing success" },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "data validation and parsing failed" },
    { status: 500 }
  );
}
