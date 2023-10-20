import { NextRequest, NextResponse } from "next/server";
import dailyHandler from "../../../../../Scapping/src/Controller/Daily/Daily";
import { dailyDataType } from "../../../../../Types/types";
import getRootHTMLPage from "../../../../../Scapping/src/Addon/RootPage/RootPage";

export async function POST(req: NextRequest) {
  const { parameter, day } = await req.json();
  const _rootPage = getRootHTMLPage(parameter)
  let daily: dailyDataType = (await dailyHandler(
    parameter,
    day,
    _rootPage
  )) as dailyDataType;
  if (daily) return NextResponse.json(daily);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
