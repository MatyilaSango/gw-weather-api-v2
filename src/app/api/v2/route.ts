import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json("A global weather API that can get the data of any location all over the world.")
}