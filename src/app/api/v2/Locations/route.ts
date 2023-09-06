import { NextRequest, NextResponse } from "next/server";
import { Data } from "../../../../../enums/enum";
import { Locations } from "../../../../../Scapping/src/Service/Locations/Locations";
import { locationsType } from "../../../../../Types/types";

export async function POST(req: NextRequest) {
  const { parameter } = await req.json();
  let locations: Locations = new Locations();
  await locations.scrapLocations(parameter);
  let res: locationsType = locations.getLocations();
  if (res) return NextResponse.json(res);
  return NextResponse.json({ error: Data.NOT_FOUND });
}
