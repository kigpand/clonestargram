import { IFollow } from "./IFollow";
import { IPost } from "./IPost";

export interface IUser {
  followers: IFollow[];
  followings: IFollow[];
  Posts: IPost[];
  email: string;
  name: string;
  id: string;
  phone: string;
  image: string;
  intro: string;
}
