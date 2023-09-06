import { NextRequest, NextResponse } from "next/server";
import { Data } from "../../../../../enums/enum";
import hourlyHandler from "../../../../../Scapping/src/Controller/Hourly/Hourly";
import { hourlyDataType } from "../../../../../Types/types";

export async function POST(req: NextRequest) {
  const { parameter } = await req.json();
  let hourly: hourlyDataType = (await hourlyHandler(
    parameter
  )) as hourlyDataType;
  if (hourly) return NextResponse.json(hourly);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
