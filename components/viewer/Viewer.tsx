import useContent from "../../store/content";
import styles from "./Viewer.module.scss";
import ViewItem from "./viewItem/ViewItem";

const Viewer = () => {
  const { currentContent, clearCurrentContent } = useContent();

  return (
    <div className={styles.viewer}>
      <img
        className={styles.img}
        src={currentContent?.image ? `${currentContent.image}` : "/noimg.png"}
        alt="viewerImg"
      />
      <ViewItem />
      <div className={styles.back} onClick={clearCurrentContent} />
    </div>
  );
};

export default Viewer;
