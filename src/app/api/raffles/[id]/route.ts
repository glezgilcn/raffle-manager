import { getUserFormToken } from "@/utils/constants";
import { db } from "@/utils/database";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// get raffle
export async function GET(_: unknown, { params }: { params: { id: string } }) {
  const token = cookies().get("access_token");
  if (!token) {
    return NextResponse.json(null, { status: 401 });
  }
  const user = getUserFormToken(token.value);
  const raffle = await db.getRaffle(user, params.id);
  return NextResponse.json(raffle);
}

// update of raffles
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const token = cookies().get("access_token");
  if (!token) {
    return NextResponse.json(null, { status: 401 });
  }
  const user = getUserFormToken(token.value);
  const body = await request.json();
  const raffle = await db.getRaffle(user, params.id);
  raffle.tickets[body.index] = JSON.stringify(body.ticket) as unknown as Buyer;
  await db.updateRaffle(user, params.id, raffle);
  return NextResponse.json(raffle);
}
