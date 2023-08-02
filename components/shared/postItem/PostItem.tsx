"use client";

import React, { useState } from "react";
import styles from "./PostItem.module.scss";
import { IPost } from "../../../interface/IPost";
import Viewer from "../../viewer/Viewer";

interface IPostItem {
  post: IPost;
}

const PostItem = ({ post }: IPostItem) => {
  const [view, setView] = useState<boolean>(false);

  const onItemClick = () => {
    setView(true);
  };

  const onCloseView = () => {
    setView(false);
  };

  return (
    <div className={styles.postItem}>
      <div className={styles.card} onClick={onItemClick}>
        <img
          src={post.image ? `${post.image}` : "/noimg.png"}
          className={styles.front}
          alt="postImg"
        />
      </div>
      {view && <Viewer post={post} onCloseView={onCloseView} />}
    </div>
  );
};

export default PostItem;
