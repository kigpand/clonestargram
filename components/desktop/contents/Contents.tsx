"use client";

import styles from "./Contents.module.scss";
import ContentsItem from "../../shared/contentsItem/ContentsItem";
import useSWR from "swr";
import React from "react";
import { getPosts } from "../../../service/post";
import { IPost } from "../../../interface/IPost";

const Contents = React.memo(() => {
  const { data, isLoading, error } = useSWR("/api/post");

  return (
    <div className={styles.contents}>
      <div className={styles.lists}>
        {data?.map((item: IPost, i: number) => {
          return <ContentsItem post={item} key={i} />;
        })}
      </div>
    </div>
  );
});

Contents.displayName = "Contents";

export default Contents;
