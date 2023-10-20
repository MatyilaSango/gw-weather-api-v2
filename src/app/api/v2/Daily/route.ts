import { NextRequest, NextResponse } from "next/server";
import dailyHandler from "../../../../../Scapping/src/Controller/Daily/Daily";
import { dailyDataType } from "../../../../../Types/types";

export async function POST(req: NextRequest) {
  const { parameter, day } = await req.json();
  let daily: dailyDataType = (await dailyHandler(
    parameter,
    day
  )) as dailyDataType;
  if (daily) return NextResponse.json(daily);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
