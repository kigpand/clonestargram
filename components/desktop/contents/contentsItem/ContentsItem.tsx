import React, { useEffect } from "react";
import useContent from "../../../../store/content";
import styles from "./ContentsItem.module.scss";

const ContentsItem = ({ post }: any) => {
  const { setCurrentContent } = useContent();

  useEffect(() => {
    console.log(post);
  }, [post]);

  const onItemClick = () => {
    setCurrentContent(post);
  };

  return (
    <div className={styles.contentsItem} onClick={onItemClick}>
      <div className={styles.card}>
        <img src={"/noimg.png"} className={styles.front} alt="postImg" />
      </div>
    </div>
  );
};

export default ContentsItem;
