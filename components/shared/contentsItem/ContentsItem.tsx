"use client";

import React, { useState } from "react";
import styles from "./ContentsItem.module.scss";
import { IPost } from "../../../interface/IPost";
import Viewer from "../../viewer/Viewer";

interface IContentsItem {
  post: IPost;
}

const ContentsItem = ({ post }: IContentsItem) => {
  const [view, setView] = useState<boolean>(false);

  const onItemClick = () => {
    setView(true);
  };

  const onCloseView = () => {
    setView(false);
  };

  return (
    <div className={styles.contentsItem}>
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

export default ContentsItem;
