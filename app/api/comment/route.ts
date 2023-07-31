import { NextRequest, NextResponse } from "next/server";
import { addComment } from "../../../service/post";
import JWT from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const cookie = req.cookies;
  const value = cookie.get("jwt")?.value;
  if (!value) return new Response("Bad Request", { status: 400 });
  const jwt: any = JWT.verify(value, process.env.NEXT_PUBLIC_JWT_SECRET!);
  const { id } = jwt;
  const { postId, comment, image, nickname } = await req.json();

  if (!id || !comment) return new Response("Bad Request", { status: 400 });

  return addComment(postId, id, comment, image, nickname)
    .then((res) => {
      return NextResponse.json(res);
    })
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
