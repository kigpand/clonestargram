// import JWT from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { onCheckUser, onIdCheck } from "../../../service/user";
import JWT from "jsonwebtoken";

// login url
export async function POST(req: NextRequest) {
  const { id, pw } = await req.json();
  const accessToken = JWT.sign({ id }, process.env.NEXT_PUBLIC_JWT_SECRET!);
  const result = await onCheckUser(id, pw);
  if (!result) return new Response("fail", { status: 400 });

  const response = NextResponse.json({ status: 200, data: result });
  response.cookies.set({
    name: "jwt",
    value: accessToken,
    httpOnly: true,
    maxAge: 3600,
  });

  return response;
}

// get user info
export async function GET(req: NextRequest) {
  const cookie = req.cookies;
  const value = cookie.get("jwt")?.value;
  if (!value) return new Response("Bad Request");
  const jwt: any = JWT.verify(value, process.env.NEXT_PUBLIC_JWT_SECRET!);
  const { id } = jwt;
  const result = await onIdCheck(id);
  if (!result) return new Response("fail");

  return NextResponse.json({ status: 200, data: result });
}
