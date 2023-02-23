import create from "zustand";

interface IPostsStore {
  posts: any;
  setPosts: (item: any) => void;
  clearPosts: () => void;
}

const usePosts = create<IPostsStore>((set) => ({
  posts: [],
  setPosts: (item: any) => set({ posts: item }),
  clearPosts: () => set({ posts: [] }),
}));

export default usePosts;
