import { useEffect } from "react";
import useContent from "../../../../../store/content";
import styles from "./ViewItemHeader.module.scss";

const ViewItemHeader = () => {
  const { currentContent } = useContent();

  return (
    <div className={styles.viewItemHeader}>
      <img
        src={
          currentContent && currentContent.User.userImg
            ? `${process.env.NEXT_PUBLIC_API_URL}/${currentContent.User.userImg}`
            : "/profileImg.png"
        }
        alt="prifle"
        className={styles.img}
      />
      <div className={styles.text}>{currentContent.User.nickname}</div>
    </div>
  );
};

export default ViewItemHeader;
