import React from "react";
import useContent from "../../../store/content";
import styles from "./ContentsItem.module.scss";
import { IPost } from "../../../interface/IPost";

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
          src={
            post.image ? `http://localhost:4000/${post.image}` : "/noimg.png"
          }
          className={styles.front}
          alt="postImg"
        />
      </div>
    </div>
  );
};

export default ContentsItem;
