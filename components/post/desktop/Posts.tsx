"use client";

import { usePost } from "../../../hooks/usePost";
import { IPost } from "../../../interface/IPost";
import usePosts from "../../../store/post";
import HashTagContents from "../../hashTagContents/HashTagContents";
import ContentsItem from "../../shared/contentsItem/ContentsItem";
import Loading from "../../shared/loading/Loading";
import styles from "./Posts.module.scss";
import React, { useEffect } from "react";

const Posts = () => {
  const { posts, isLoading } = usePost();
  const { hashTagPosts, setHashTagPosts, setPost, post } = usePosts();

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

  return (
    <div className={styles.contents}>
      {isLoading && <Loading />}
      {hashTagPosts.length > 0 ? (
        <HashTagContents isMobile={false} />
      ) : (
        <div className={styles.lists}>
          {post?.map((item: IPost, i: number) => {
            return <ContentsItem post={item} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
