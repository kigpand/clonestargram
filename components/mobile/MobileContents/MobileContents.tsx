"use client";

import { useEffect } from "react";
import { usePost } from "../../../hooks/usePost";
import { IPost } from "../../../interface/IPost";
import useContent from "../../../store/content";
import usePosts from "../../../store/post";
import ContentItem from "./item/ContentItem";
import styles from "./MobileContents.module.scss";
import HashTagContents from "../../desktop/hashTagContents/HashTagContents";

const MobileContents = () => {
  const { posts, isLoading, error } = usePost();
  const { post, hashTagPosts, setHashTagPosts, setPost } = usePosts();
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
      {hashTagPosts.length > 0 ? (
        <HashTagContents isMobile={true} />
      ) : (
        <div className={styles.lists}>
          {post?.map((item: IPost, i: number) => {
            return <ContentItem post={item} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MobileContents;
