"use client";

import { useEffect } from "react";
import { usePost } from "../../../hooks/usePost";
import { IPost } from "../../../interface/IPost";
import usePosts from "../../../store/post";
import ContentItem from "./item/ContentItem";
import styles from "./MobileContents.module.scss";
import HashTagContents from "../../hashTagContents/HashTagContents";

const MobileContents = () => {
  const { posts, isLoading, error } = usePost();
  const { post, hashTagPosts, setHashTagPosts, setPost } = usePosts();

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
