"use client";

import React, { useEffect, useState } from "react";
import styles from "./PostItem.module.scss";
import { IPost } from "../../../interface/IPost";
import Viewer from "../../viewer/Viewer";

interface IPostItem {
  post: IPost;
}

const PostItem = ({ post }: IPostItem) => {
  const [view, setView] = useState<boolean>(false);

  return (
    <div className={styles.postItem}>
      <div className={styles.card} onClick={() => setView(true)}>
        <img
          src={post.image ? `${post.image}` : "/noimg.png"}
          className={styles.front}
          alt="postImg"
        />
      </div>
      {view && <Viewer post={post} onCloseView={() => setView(false)} />}
    </div>
  );
};

export default PostItem;
