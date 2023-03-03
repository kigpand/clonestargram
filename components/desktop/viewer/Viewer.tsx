import React, { useEffect, useRef, useState } from "react";
import useContent from "../../../store/content";
import styles from "./Viewer.module.scss";
import ViewItem from "./viewItem/ViewItem";

const Viewer = () => {
  const { currentContent, clearCurrentContent } = useContent();
  const [comment, setComment] = useState();
  const textarea = useRef<HTMLTextAreaElement>(null);

  const commentText = (e: any) => {
    setComment(e.target.value);
  };

  return (
    <div className={styles.viewer}>
      <img className={styles.img} src="noImg.png" alt="viewerImg" />
      <ViewItem />
      <div className={styles.back} onClick={clearCurrentContent} />
    </div>
  );
};

export default Viewer;
