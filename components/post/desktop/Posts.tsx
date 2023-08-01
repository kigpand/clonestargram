"use client";

import useFilteredPost from "../../../hooks/useFilteredPost";
import { usePost } from "../../../hooks/usePost";
import { IPost } from "../../../interface/IPost";
import usePosts from "../../../store/post";
import HashTagContents from "../../hashTagContents/HashTagContents";
import ContentsItem from "../../shared/contentsItem/ContentsItem";
import Loading from "../../shared/loading/Loading";
import styles from "./Posts.module.scss";
import React, { useEffect } from "react";

const Posts = () => {
  const { isLoading } = usePost();
  const { hashTagPosts } = usePosts();
  const { post } = useFilteredPost();

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
