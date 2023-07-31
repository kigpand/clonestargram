// import JWT from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { onCheckUser } from "../../../service/user";
import JWT from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
  const { id, pw } = await req.json();
  const accessToken = JWT.sign({ id }, process.env.NEXT_PUBLIC_JWT_SECRET!);
  // const result = await onCheckUser(id, pw);

  const response = NextResponse.json({ status: 200 });

  // Then set a cookie
  response.cookies.set({
    name: "jwt",
    value: accessToken,
    httpOnly: true,
  });

  return response;
}

export async function GET(req: NextRequest) {
  const cookie = req.cookies;
  console.log(cookie);
  const value = cookie.get("jwt")?.value;
  if (!value) return new Response("fail");
  const jwt = JWT.verify(value, process.env.NEXT_PUBLIC_JWT_SECRET!);
  console.log(jwt);

  return NextResponse.json({ status: 200 });
}
