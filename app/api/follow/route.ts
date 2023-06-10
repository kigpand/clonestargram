import { NextRequest, NextResponse } from "next/server";
import { follow, unFollow } from "../../../service/user";

export async function PUT(req: NextRequest) {
  const { id, other, isFollow } = await req.json();

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
