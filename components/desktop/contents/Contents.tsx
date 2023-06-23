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
    <div className={styles.contents}>
      {isLoading && <Loading />}
      {hashTagPosts.length > 0 ? (
        <HashTagContents isMobile={false} />
      ) : (
        <div className={styles.lists}>
          {posts?.map((item: IPost, i: number) => {
            return <ContentsItem post={item} key={i} />;
          })}
        </div>
      )}
      {currentContent && <Viewer />}
    </div>
  );
});

export default Contents;
