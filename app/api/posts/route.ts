import { NextResponse } from "next/server";
import { getPosts } from "../../../service/post";

export async function GET() {
  return getPosts() //
    .then((data) => NextResponse.json(data));
}
