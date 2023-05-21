"use client";

import styles from "./Contents.module.scss";
import ContentsItem from "../../shared/contentsItem/ContentsItem";
import useSWR from "swr";
import React from "react";
import { IPost } from "../../../interface/IPost";
import useContent from "../../../store/content";
import Viewer from "../viewer/Viewer";

const Contents = React.memo(() => {
  const { data, isLoading, error } = useSWR("/api/post");
  const { currentContent } = useContent();

  return (
    <div className={styles.contents}>
      <div className={styles.lists}>
        {data?.map((item: IPost, i: number) => {
          return <ContentsItem post={item} key={i} />;
        })}
      </div>
      {currentContent && <Viewer />}
    </div>
  );
});

Contents.displayName = "Contents";

export default Contents;
