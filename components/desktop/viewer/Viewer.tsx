import React, { useEffect, useRef, useState } from "react";
import useContent from "../../../store/content";
import styles from "./Viewer.module.scss";
import ViewItem from "./viewItem/ViewItem";

const Viewer = () => {
  const { currentContent, clearCurrentContent } = useContent();
  const [comment, setComment] = useState();
  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    console.log(currentContent);
  }, [currentContent]);

  const commentText = (e: any) => {
    setComment(e.target.value);
  };

  return (
    <div className={styles.viewer} onClick={clearCurrentContent}>
      <img className={styles.img} src="noImg.png" alt="viewerImg" />
      <ViewItem />
    </div>
  );
};

export default Viewer;
