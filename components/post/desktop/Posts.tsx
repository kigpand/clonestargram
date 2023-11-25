"use client";

import { IPost } from "../../../interface/IPost";
import styles from "./Posts.module.scss";
import React from "react";
import PostItem from "../../common/postItem/PostItem";
import useFilteredPost from "../../../hooks/useFilteredPost";
import PostSkeleton from "../../common/postSkeleton/PostSkeleton";

type Props = {
  post: IPost[];
};

const arr = Array.from({ length: 9 });

const Posts = ({ post }: Props) => {
  const { isLoading } = useFilteredPost();
  return (
    <div className={styles.contents}>
      <div className={styles.lists}>
        {isLoading && (
          <>
            {arr.map((item, i: number) => {
              return <PostSkeleton key={i} />;
            })}
          </>
        )}
        {post.map((item: IPost, i: number) => {
          return <PostItem post={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
