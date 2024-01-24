import { NextRequest, NextResponse } from "next/server";
import dailyHandler from "../../../../../Scapping/src/Controller/Daily/Daily";
import { dailyDataType } from "../../../../../Types/types";
import getRootHTMLPage from "../../../../../Scapping/src/Addon/RootPage/RootPage";
import { Data } from "../../../../../enums/enum";

export async function POST(req: NextRequest) {
  const { city, geo, day } = await req.json();
  const _rootPage = getRootHTMLPage(city, geo)
  let daily: dailyDataType = (await dailyHandler(
    city,
    day,
    _rootPage
  )) as dailyDataType;
  if (daily) return NextResponse.json(daily);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
