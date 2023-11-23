"use client";

import { IPost } from "../../../interface/IPost";
import styles from "./Posts.module.scss";
import React from "react";
import PostItem from "../../common/postItem/PostItem";

type Props = {
  post: IPost[];
  isLoading: boolean;
};

const Posts = ({ post, isLoading }: Props) => {
  return (
    <div className={styles.contents}>
      <div className={styles.lists}>
        {post.map((item: IPost, i: number) => {
          return <PostItem post={item} isLoading={isLoading} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
