import create from "zustand";
import { IPost } from "../interface/IPost";

interface IPostsStore {
  hashTagPosts: IPost[];
  setHashTagPosts: (item: IPost[]) => void;
  clearHastTagPosts: () => void;
}

const usePosts = create<IPostsStore>((set) => ({
  hashTagPosts: [],
  setHashTagPosts: (item: IPost[]) => set({ hashTagPosts: item }),
  clearHastTagPosts: () => set({ hashTagPosts: [] }),
}));

export default usePosts;
