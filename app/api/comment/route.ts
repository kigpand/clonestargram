import { NextRequest, NextResponse } from "next/server";
import { addComment } from "../../../service/post";

export async function POST(req: NextRequest) {
  const { postId, id, comment, image, nickname } = await req.json();

  if (!id || !comment) return new Response("Bad Request", { status: 400 });

  return addComment(postId, id, comment, image, nickname)
    .then((res) => {
      return NextResponse.json(res);
    })
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
