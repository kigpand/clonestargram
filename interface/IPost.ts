export interface IComment {
  comment: string;
  username: string;
  image: string;
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
}
