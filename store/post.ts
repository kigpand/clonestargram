import create from "zustand";
import { IPost } from "../interface/IPost";

interface IPostsStore {
  posts: IPost[];
  hashTagPosts: IPost[];
  setPosts: (item: IPost[]) => void;
  clearPosts: () => void;
  setHashTagPosts: (item: IPost[]) => void;
  clearHastTagPosts: () => void;
}

const usePosts = create<IPostsStore>((set) => ({
  posts: [],
  hashTagPosts: [],
  setPosts: (item: IPost[]) => set({ posts: item }),
  clearPosts: () => set({ posts: [] }),
  setHashTagPosts: (item: IPost[]) => set({ hashTagPosts: item }),
  clearHastTagPosts: () => set({ hashTagPosts: [] }),
}));

export default usePosts;
