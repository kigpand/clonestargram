import HashTagContents from "../components/desktop/hashTagContents/HashTagContents";
import Viewer from "../components/desktop/viewer/Viewer";
import useContent from "../store/content";
import styles from "../styles/Home.module.scss";

const HashTag = () => {
  const { currentContent } = useContent();

  return (
    <div className={styles.container}>
      <HashTagContents />
      {currentContent && <Viewer />}
    </div>
  );
};

export default HashTag;
