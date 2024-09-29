import Beans from "@/packages/server-only/models/Beans";
import { BeanType } from "@/types/beanTypes";
import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/packages/server-only/lib/connectDB";

type Params = {
    id: string
}

export async function GET(req: NextRequest, context: {params: Params}) {
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
