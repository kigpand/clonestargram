import { useRouter } from "next/router";
import { useEffect } from "react";
import HashTagContents from "../components/desktop/hashTagContents/HashTagContents";
import Viewer from "../components/desktop/viewer/Viewer";
import useContent from "../store/content";
import useData from "../store/data";
import styles from "../styles/Home.module.scss";

const HashTag = () => {
  const { currentContent } = useContent();
  const { searchTag } = useData();
  const router = useRouter();

  useEffect(() => {
    if (searchTag === "") router.push("/post");
  }, [searchTag]);

  return (
    <div className={styles.container}>
      <HashTagContents />
      {currentContent && <Viewer />}
    </div>
  );
};

export default HashTag;
