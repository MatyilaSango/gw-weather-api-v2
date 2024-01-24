import { NextRequest, NextResponse } from "next/server";
import { Data } from "../../../../../enums/enum";
import { monthlyWeatherData } from "../../../../../Types/types";
import getRootHTMLPage from "../../../../../Scapping/src/Addon/RootPage/RootPage";
import monthlyHandler from "../../../../../Scapping/src/Controller/Mothly/Monthly";

export async function POST(req: NextRequest) {
  const { city, geo } = await req.json();
  const _rootPage = getRootHTMLPage(city, geo)
  let monthly: monthlyWeatherData = (await monthlyHandler(
    city,
    _rootPage
  )) as monthlyWeatherData;
  if (monthly) return NextResponse.json(monthly);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
