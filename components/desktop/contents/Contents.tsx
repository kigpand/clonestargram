"use client";

import styles from "./Contents.module.scss";
import ContentsItem from "../../shared/contentsItem/ContentsItem";
import useSWR from "swr";
import React, { useEffect } from "react";
import { IPost } from "../../../interface/IPost";
import useContent from "../../../store/content";
import Viewer from "../viewer/Viewer";
import Loading from "../../shared/loading/Loading";
import { usePost } from "../../../hooks/usePost";

const Contents = React.memo(() => {
  const { posts, isLoading, error } = usePost();
  const { currentContent } = useContent();

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className={styles.contents}>
      {isLoading && <Loading />}
      <div className={styles.lists}>
        {posts?.map((item: IPost, i: number) => {
          return <ContentsItem post={item} key={i} />;
        })}
      </div>
      {currentContent && <Viewer />}
    </div>
  );
});

export default Contents;
