"use client";

import styles from "./Contents.module.scss";
import ContentsItem from "../../shared/contentsItem/ContentsItem";
import React, { useEffect } from "react";
import { IPost } from "../../../interface/IPost";
import useContent from "../../../store/content";
import Viewer from "../viewer/Viewer";
import Loading from "../../shared/loading/Loading";
import { usePost } from "../../../hooks/usePost";
import usePosts from "../../../store/post";
import HashTagContents from "../hashTagContents/HashTagContents";

const Contents = React.memo(() => {
  const { posts, isLoading, error } = usePost();
  const { hashTagPosts, setHashTagPosts, setPost, post } = usePosts();
  const { currentContent } = useContent();

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
      {currentContent && <Viewer />}
    </div>
  );
});

export default Contents;
