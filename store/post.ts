import create from "zustand";
import { IPost } from "../interface/IPost";

interface IPostsStore {
  posts: IPost[];
  setPosts: (item: IPost[]) => void;
  clearPosts: () => void;
}

const usePosts = create<IPostsStore>((set) => ({
  posts: [],
  setPosts: (item: IPost[]) => set({ posts: item }),
  clearPosts: () => set({ posts: [] }),
}));

export default usePosts;
