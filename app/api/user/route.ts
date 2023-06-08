import { NextRequest, NextResponse } from "next/server";
import { updateUser } from "../../../service/user";

export async function PATCH(req: NextRequest) {
  const form = await req.formData();

  const userId = form.get("id")!.toString();
  const nickname = form.get("nickname")!.toString();
  const email = form.get("email")!.toString();
  const phone = form.get("phone")!.toString();
  const intro = form.get("intro")!.toString();
  const image = form.get("image") as Blob;

  if (image) {
    return updateUser(userId, nickname, email, phone, intro, image).then(
      (data) => {
        return NextResponse.json(data);
      }
    );
  }

  return updateUser(userId, nickname, email, phone, intro).then((data) => {
    return NextResponse.json(data);
  });
}
