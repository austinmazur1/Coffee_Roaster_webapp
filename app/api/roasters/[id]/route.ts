import type { NextApiRequest, NextApiResponse } from "next";

import Roaster from "@/models/Roasters";
import { RoasterType } from "@/types/roasterTypes";
import { beanFormSchema } from "@/schemas/beanFormSchema";
import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils/connectDB";
import Beans from "@/models/Beans";

type Params = {
    id: string
}

export async function GET(req: Request, context: {params: Params}) {
    const roasterId = context.params.id;
  try {
    await connectDB();
    const roaster = await Roaster.findById(roasterId);
    return Response.json(roaster);
  } catch (error) {
    console.log("ERR", error);
  }
}
