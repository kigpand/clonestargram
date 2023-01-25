import React from "react";
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
        <img src="/noimg.png" className={styles.front} alt="postImg" />
        <div className={styles.back}>
          <div>
            <img
              className={styles.commentImg}
              src="/comment.png"
              alt="코멘트"
            ></img>
            {post}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsItem;
