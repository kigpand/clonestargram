import React from "react";
import MakeBtns from "./btns/MakeBtns";
import MakeHeader from "./header/MakeHeader";
import styles from "./MakeContentItem.module.scss";
import MakeTag from "./tag/MakeTag";
import MakeUpload from "./upload/MakeUpload";

const MakeContentItem = () => {
  return (
    <div className={styles.makeContentItem}>
      <div className={styles.container}>
        <MakeHeader />
        <MakeUpload />
        <MakeTag />
        <div className={styles.contentBox}>
          <textarea className={styles.content} cols={20} rows={20}></textarea>
        </div>
        <MakeBtns />
      </div>
    </div>
  );
};

export default MakeContentItem;
