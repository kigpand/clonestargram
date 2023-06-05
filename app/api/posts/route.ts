import { NextRequest, NextResponse } from "next/server";
import { createPost, getPosts } from "../../../service/post";

export async function GET() {
  return getPosts() //
    .then((data) => NextResponse.json(data));
}

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const id = form.get("id")?.toString();
  const tag = form.get("tag")?.toString();
  const content = form.get("content")?.toString();
  const image = form.get("file") as Blob;

  if (!id || !tag || !content)
    return new Response("Bad Request", { status: 400 });

  return createPost(id, tag, content, image).then((data) =>
    NextResponse.json(data)
  );
}
