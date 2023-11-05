import { useEffect, useState } from "react";
import { IPost } from "../interface/IPost";
import { usePost } from "./usePost";
import usePosts from "../store/post";

// load한 post를 생성한 날짜순으로 정렬한 결과물을 전역 상태관리 해주는 custom hook
export default function useFilteredPost() {
  const { posts, isLoading } = usePost();
  const { post, setPost, setHashTagPosts } = usePosts();

  useEffect(() => {
    if (posts) {
      const result = posts.sort((a: IPost, b: IPost) => {
        if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
          return -1;
        }
        return 1;
      });
      setPost(result);
    }

    return () => {
      setHashTagPosts([]);
    };
  }, [posts]);

  return { post, isLoading };
}
