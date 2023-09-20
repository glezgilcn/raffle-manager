import { createToken } from "@/utils/constants";
import { db } from "@/utils/database";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// signup
export async function POST(request: Request) {
  const { username, password, name } = await request.json();
  const user = await db.signup(username, password, name);
  const token = createToken(user);
  const now = new Date();
  const time = now.getTime();
  const expireTime = time + 1000 * 36000;
  now.setTime(expireTime);
  cookies().set("access_token", token, { httpOnly: true, expires: now });
  return NextResponse.json({ status: "ok" });
}

// login
export async function PUT(request: Request) {
  const { username, password } = await request.json();
  const user = await db.login(username, password);
  const token = createToken(user);
  const now = new Date();
  const time = now.getTime();
  const expireTime = time + 1000 * 36000;
  now.setTime(expireTime);
  cookies().set("access_token", token, {
    httpOnly: true,
    expires: now,
  });
  return NextResponse.json({ status: "ok" });
}

// logout
export async function DELETE() {
  cookies().delete("access_token");
  return NextResponse.json({ status: "ok" });
}
