import { NextRequest, NextResponse } from "next/server";
import todayHandler from "../../../../../Scapping/src/Controller/Today/Today";
import { Data } from "../../../../../enums/enum";
import { todayDataType } from "../../../../../Types/types";
import getRootHTMLPage from "../../../../../Scapping/src/Addon/RootPage/RootPage";

export async function POST(req: NextRequest) {
  const { city, geo } = await req.json();
  const _rootPage = getRootHTMLPage(city, geo)
  let today: todayDataType = (await todayHandler(city, _rootPage)) as todayDataType;
  if (today) return NextResponse.json(today);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
