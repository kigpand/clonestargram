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
  text: string;
  createdAt: string;
  likes: string[];
  comments: IComment[];
}
