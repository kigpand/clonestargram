"use client";

import { useEffect } from "react";
import { usePost } from "../../../hooks/usePost";
import { IPost } from "../../../interface/IPost";
import useContent from "../../../store/content";
import usePosts from "../../../store/post";
import ContentItem from "./item/ContentItem";
import styles from "./MobileContents.module.scss";

const MobileContents = () => {
  const { posts, isLoading, error } = usePost();
  const { hashTagPosts, setHashTagPosts, setPost } = usePosts();
  const { currentContent } = useContent();

  useEffect(() => {
    if (posts) {
      setPost(posts);
    }

    return () => {
      setHashTagPosts([]);
    };
  }, [posts]);

  return (
    <div className={styles.mobileContents}>
      {posts?.map((item: IPost, i: number) => {
        return <ContentItem post={item} key={i} />;
      })}
    </div>
  );
};

export default MobileContents;
