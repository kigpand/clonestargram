import { IPost } from "../interface/IPost";
import useSWR, { useSWRConfig } from "swr";

export const usePost = () => {
  const { data: posts, isLoading, error } = useSWR<IPost[]>("/api/posts");
  const { mutate } = useSWRConfig();

  const updatePosts = () => {
    mutate("/api/posts");
  };

  return { posts, isLoading, error, updatePosts };
};
