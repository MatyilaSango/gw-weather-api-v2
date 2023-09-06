import { NextRequest, NextResponse } from "next/server";
import todayHandler from "../../../../../Scapping/src/Controller/Today/Today";
import { Data } from "../../../../../enums/enum";
import { todayDataType } from "../../../../../Types/types";

export async function POST(req: NextRequest) {
  const { parameter } = await req.json();
  let today: todayDataType = (await todayHandler(parameter)) as todayDataType;
  if (today) NextResponse.json(today);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
