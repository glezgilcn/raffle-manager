import { getUserFormToken } from "@/utils/constants";
import { db } from "@/utils/database";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// list of raffles
export async function GET() {
  const token = cookies().get("access_token");
  if (!token) {
    return NextResponse.json(null, { status: 401 });
  }
  const user = getUserFormToken(token.value);
  const list = await db.getRaffles(user);
  return NextResponse.json(list);
}

// create of raffle
export async function POST(request: Request) {
  const token = cookies().get("access_token");
  if (!token) {
    return NextResponse.json(null, { status: 401 });
  }
  const user = getUserFormToken(token.value);
  const body = await request.json();
  const raffle = await db.createRaffle(user, {
    ...body,
    tickets: new Array(body.tickets).fill(null),
  });
  return NextResponse.json(raffle);
}
