import { NextRequest, NextResponse } from "next/server";
import { Data } from "../../../../../enums/enum";
import { locationsType } from "../../../../../Types/types";
import locationsHandler from "../../../../../Scapping/src/Controller/Location/Location";

export async function POST(req: NextRequest) {
  const { city } = await req.json();
  console.log(city)
  let res: locationsType = (await locationsHandler(city))
  if (res) return NextResponse.json(res);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
