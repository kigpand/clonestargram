import React, { useEffect } from "react";
import useContent from "../../../store/content";
import styles from "./ContentsItem.module.scss";
import { IPost } from "../../../interface/IPost";
import Viewer from "../../desktop/viewer/Viewer";

interface IContentsItem {
  post: IPost;
}

const ContentsItem = ({ post }: IContentsItem) => {
  const { setCurrentContent } = useContent();

  const onItemClick = () => {
    setCurrentContent(post);
  };

  return (
    <div className={styles.contentsItem} onClick={onItemClick}>
      <div className={styles.card}>
        <img
          src={post.image ? `${post.image}` : "/noimg.png"}
          className={styles.front}
          alt="postImg"
        />
      </div>
    </div>
  );
};

export default ContentsItem;
