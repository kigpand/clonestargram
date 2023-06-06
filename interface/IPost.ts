export interface IComment {
  comment: string;
  nickname: string;
  photo: string;
}

export interface IPost {
  id: string;
  username: string;
  userImage: string;
  image: string;
  content: string;
  createdAt: string;
  comments: IComment[];
  tag: string;
  _id: string;
}
