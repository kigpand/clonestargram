import JWT from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const accessTokenPayload = await req.json();
  const accessToken = JWT.sign(
    accessTokenPayload,
    process.env.NEXT_PUBLIC_JWT_SECRET!
  );

  return new Response("success", {
    status: 200,
    headers: { "Set-Cookie": `token=${accessToken}` },
  });
}

export async function GET(req: NextRequest) {
  console.log(req.cookies);
  console.log("45646464");
}
