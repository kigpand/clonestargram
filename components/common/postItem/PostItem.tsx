"use client";

import React, { useEffect, useState } from "react";
import styles from "./PostItem.module.scss";
import { IPost } from "../../../interface/IPost";
import Viewer from "../../viewer/Viewer";

interface IPostItem {
  post: IPost;
  isLoading: boolean;
}

const PostItem = ({ post, isLoading }: IPostItem) => {
  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <div className={styles.postItem}>
      {isLoading ? (
        <div className={styles.cardLoading}>
          <div className={styles.skeletonBar}></div>
        </div>
      ) : (
        <div className={styles.card} onClick={() => setView(true)}>
          <img
            src={post.image ? `${post.image}` : "/noimg.png"}
            className={styles.front}
            alt="postImg"
          />
        </div>
      )}
      {view && <Viewer post={post} onCloseView={() => setView(false)} />}
    </div>
  );
};

export default PostItem;
