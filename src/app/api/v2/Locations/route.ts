import { NextRequest, NextResponse } from "next/server";
import { Data } from "../../../../../enums/enum";
import { locationsType } from "../../../../../Types/types";
import locationsHandler from "../../../../../Scapping/src/Controller/Location/Location";

export async function POST(req: NextRequest) {
  const { parameter } = await req.json();
  let res: locationsType = (await locationsHandler(parameter))
  if (res) return NextResponse.json(res);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
