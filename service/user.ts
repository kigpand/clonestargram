import axios from "axios";
import { client } from "./sanity";

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

export const onCheckUser = (id: string, pw: string) => {
  return client.fetch(
    `*[_type =="user" && username == "${id}" && password == "${pw}"]`
  );
};

export const updateUser = async (
  username: string,
  name: string,
  email: string
) => {
  console.log(username);
  return client.patch(username).set({ phone: "00000000000" }).commit();
};
