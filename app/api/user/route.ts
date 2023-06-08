import { NextRequest, NextResponse } from "next/server";
import { createPost, getPosts } from "../../../service/post";
import { updateUser } from "../../../service/user";

export async function PATCH(req: NextRequest) {
  const form = await req.formData();

  const userId = form.get("id")!.toString();
  const nickname = form.get("nickname")!.toString();
  const email = form.get("email")!.toString();

  // const image = form.get("file") as Blob;

  return updateUser(userId, nickname, email).then((data) => {
    console.log(data);
    return NextResponse.json(data);
  });
}
