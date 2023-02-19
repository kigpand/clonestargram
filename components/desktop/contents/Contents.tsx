import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { onLoadPost } from "../../../load/post";
import usePosts from "../../../store/post";
import styles from "./Contents.module.scss";
import ContentsItem from "./contentsItem/ContentsItem";

const Contents = () => {
  const { posts } = usePosts();

  return (
    <div className={styles.contents}>
      <div className={styles.lists}>
        {posts.map((item: any, i: number) => {
          return <ContentsItem post={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Contents;
