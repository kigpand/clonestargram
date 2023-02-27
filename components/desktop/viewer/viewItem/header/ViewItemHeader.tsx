import useContent from "../../../../../store/content";
import styles from "./ViewItemHeader.module.scss";

const ViewItemHeader = () => {
  const { currentContent } = useContent();

  return (
    <div className={styles.viewItemHeader}>
      <img src="/profileImg.png" alt="prifle" className={styles.img} />
      <div className={styles.text}>{currentContent.User.nickname}</div>
    </div>
  );
};

export default ViewItemHeader;
