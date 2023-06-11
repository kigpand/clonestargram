import create from "zustand";
import { IPost } from "../interface/IPost";

interface IPostsStore {
  post: IPost[];
  hashTagPosts: IPost[];
  setPost: (item: IPost[]) => void;
  setHashTagPosts: (item: IPost[]) => void;
  clearHastTagPosts: () => void;
}

const usePosts = create<IPostsStore>((set) => ({
  post: [],
  hashTagPosts: [],
  setPost: (item: IPost[]) => set({ post: item }),
  setHashTagPosts: (item: IPost[]) => set({ hashTagPosts: item }),
  clearHastTagPosts: () => set({ hashTagPosts: [] }),
}));

export default usePosts;
