export interface IComment {
  id: number;
  createdAt: string;
  updatedAt: string;
  nickname: string;
  content: string;
  PostId: number;
  User: any;
}
