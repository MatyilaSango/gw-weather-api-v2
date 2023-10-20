import { NextRequest, NextResponse } from "next/server";
import { Data } from "../../../../../enums/enum";
import hourlyHandler from "../../../../../Scapping/src/Controller/Hourly/Hourly";
import { hourlyDataType } from "../../../../../Types/types";
import getRootHTMLPage from "../../../../../Scapping/src/Addon/RootPage/RootPage";

export async function POST(req: NextRequest) {
  const { parameter } = await req.json();
  const _rootPage = getRootHTMLPage(parameter)
  let hourly: hourlyDataType = (await hourlyHandler(
    parameter,
    _rootPage
  )) as hourlyDataType;
  if (hourly) return NextResponse.json(hourly);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
