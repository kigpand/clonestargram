import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ status: 200 });
  try {
    response.cookies.delete("jwt");
    return response;
  } catch (e) {
    return new Response("fail", { status: 400 });
  }
}
