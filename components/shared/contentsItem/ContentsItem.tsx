import React, { useEffect } from "react";
import useContent from "../../../store/content";
import styles from "./ContentsItem.module.scss";

const ContentsItem = ({ post }: any) => {
  const { setCurrentContent } = useContent();

  const onItemClick = () => {
    setCurrentContent(post);
  };

  return (
    <div className={styles.contentsItem} onClick={onItemClick}>
      <div className={styles.card}>
        <img
          src={
            post.Images.length > 0
              ? `${process.env.NEXT_PUBLIC_API_URL + "/" + post.Images[0].src}`
              : "/noimg.png"
          }
          className={styles.front}
          alt="postImg"
        />
      </div>
    </div>
  );
};

export default ContentsItem;
