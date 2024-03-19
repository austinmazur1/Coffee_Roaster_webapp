import type { NextApiRequest, NextApiResponse } from "next";

import Beans from "@/models/Beans";
import { BeanType } from "@/types/beanTypes";
import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils/connectDB";

type Params = {
    id: string
}

export async function GET(req: Request, context: {params: Params}) {
    const beanId = context.params.id;
  try {
    await connectDB();
    const coffeeBeans = await Beans.findById(beanId);
    console.log('coffee beans', coffeeBeans)
    return Response.json(coffeeBeans);
  } catch (error) {
    console.log("ERR", error);
  }
}
