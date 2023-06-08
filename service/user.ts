import axios from "axios";
import { assetURL, client, urlFor } from "./sanity";

interface IAuthUser {
  id: string;
  pw: string;
  email: string;
  name: string;
  phone: string;
}

export const addUser = ({ id, email, pw, name, phone }: IAuthUser) => {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    name: name,
    password: pw,
    username: name,
    email: email,
    phone: phone,
    following: [],
    followers: [],
  });
};

export const onIdCheck = (id: string) => {
  return client.fetch(`*[_type =="user" && username == "${id}"]`);
};

export const onCheckUser = async (id: string, pw: string) => {
  const result = await client.fetch(
    `*[_type =="user" && username == "${id}" && password == "${pw}"]`
  );
  if (result.length === 0) return false;
  if (result[0].image) {
    return { ...result[0], image: urlFor(result[0].image) };
  }
  return result[0];
};

export const updateUser = async (
  username: string,
  name: string,
  email: string,
  phone: string,
  intro: string,
  imgUrl?: Blob
) => {
  if (imgUrl) {
    return fetch(assetURL, {
      method: "POST",
      headers: {
        "content-type": imgUrl.type,
        authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
      },
      body: imgUrl,
    })
      .then((res) => res.json())
      .then((result) => {
        return client
          .patch(username)
          .set({
            name: name,
            email: email,
            phone: phone,
            intro: intro,
            image: { asset: { _ref: result.document._id } },
          })
          .commit();
      });
  } else {
    return client
      .patch(username)
      .set({ name: name, email: email, phone: phone, intro: intro })
      .commit();
  }
};
