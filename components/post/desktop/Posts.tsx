"use client";

import useFilteredPost from "../../../hooks/useFilteredPost";
import { usePost } from "../../../hooks/usePost";
import { IPost } from "../../../interface/IPost";
import usePosts from "../../../store/post";
import HashTagPosts from "../../hashTagPosts/HashTagPosts";
import Loading from "../../shared/loading/Loading";
import styles from "./Posts.module.scss";
import React from "react";
import PostItem from "../../shared/postItem/PostItem";

type Props = {
  post: IPost[];
};

const Posts = ({ post }: Props) => {
  const { hashTagPosts } = usePosts();

  return (
    <div className={styles.contents}>
      {hashTagPosts.length > 0 ? (
        <HashTagPosts isMobile={false} />
      ) : (
        <div className={styles.lists}>
          {post.map((item: IPost, i: number) => {
            return <PostItem post={item} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
