import { NextRequest, NextResponse } from "next/server";
import { updateUser } from "../../../service/user";
import JWT from "jsonwebtoken";

export async function PATCH(req: NextRequest) {
  const form = await req.formData();
  const cookie = req.cookies;
  const value = cookie.get("jwt")?.value;
  if (!value) return new Response("Bad Request", { status: 400 });
  const jwt: any = JWT.verify(value, process.env.NEXT_PUBLIC_JWT_SECRET!);
  const { id } = jwt;

  const nickname = form.get("nickname")!.toString();
  const email = form.get("email")!.toString();
  const phone = form.get("phone")!.toString();
  const intro = form.get("intro")!.toString();
  const image = form.get("image") as Blob;

  if (image) {
    return updateUser(id, nickname, email, phone, intro, image).then((data) => {
      return NextResponse.json(data);
    });
  }

  return updateUser(id, nickname, email, phone, intro).then((data) => {
    return NextResponse.json(data);
  });
}
