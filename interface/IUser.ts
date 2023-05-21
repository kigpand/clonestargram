import { IFollow } from "./IFollow";
import { IPost } from "./IPost";

export interface IUser {
  Followers: IFollow[];
  Followings: IFollow[];
  Posts: IPost[];
  createdAt: string;
  email: string;
  id: string;
  intro: string;
  nickname: string;
  phone: string;
  updatedAt: string;
  userImg: string;
  userid: string;
}
