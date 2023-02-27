import { useEffect, useState } from "react";
import useContent from "../../../../../store/content";
import styles from "./ViewItemBody.module.scss";

const ViewItemBody = () => {
  const { currentContent } = useContent();
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (currentContent && currentContent.tag) {
      const items = currentContent.tag
        .split("#")
        .filter((item: string) => item !== "")
        .map((item: string) => "#" + item);
      setTags(items);
    }
  }, [currentContent]);

  return (
    <div className={styles.viewItemBody}>
      <div className={styles.content}>{currentContent.content}</div>
      <div className={styles.tags}>
        {tags.map((tag: string, i: number) => {
          return (
            <div className={styles.tag} key={i}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewItemBody;
