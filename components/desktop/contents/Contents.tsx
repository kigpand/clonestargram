import usePosts from "../../../store/post";
import styles from "./Contents.module.scss";
import ContentsItem from "../../shared/contentsItem/ContentsItem";
import React from "react";

const Contents = React.memo(() => {
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
});

Contents.displayName = "Contents";

export default Contents;
