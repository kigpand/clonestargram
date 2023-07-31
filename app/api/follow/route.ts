import { NextRequest, NextResponse } from "next/server";
import { follow, unFollow } from "../../../service/user";
import JWT from "jsonwebtoken";

export async function PUT(req: NextRequest) {
  const { other, isFollow } = await req.json();
  const cookie = req.cookies;
  const value = cookie.get("jwt")?.value;
  if (!value) return new Response("Bad Request", { status: 400 });
  const jwt: any = JWT.verify(value, process.env.NEXT_PUBLIC_JWT_SECRET!);
  const { id } = jwt;

  if (!id || !other) {
    return new Response("Bad Request", { status: 400 });
  }

  const request = isFollow ? follow : unFollow;

  return request(id, other)
    .then((res) => NextResponse.json(res))
    .catch((error) => {
      return new Response(JSON.stringify(error), { status: 500 });
    });
}
