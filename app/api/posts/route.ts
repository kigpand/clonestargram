import { NextRequest, NextResponse } from "next/server";
import { createPost, getPosts } from "../../../service/post";
import JWT from "jsonwebtoken";

export async function GET() {
  return getPosts() //
    .then((data) => NextResponse.json(data));
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const cookie = req.cookies;
  const value = cookie.get("jwt")?.value;
  if (!value) return new Response("Bad Request", { status: 400 });
  const jwt: any = JWT.verify(value, process.env.NEXT_PUBLIC_JWT_SECRET!);
  const { id } = jwt;

  const tag = form.get("tag")?.toString();
  const content = form.get("content")?.toString();
  const image = form.get("file") as Blob;

  if (!id || !tag || !content)
    return new Response("Bad Request", { status: 400 });

  return createPost(id, tag, content, image).then((data) =>
    NextResponse.json(data)
  );
}
