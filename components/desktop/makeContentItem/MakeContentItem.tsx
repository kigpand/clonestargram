import React, { useCallback, useRef, useState } from "react";
import { IAddContentItem } from "../../../interface/IAddContentItem";
import { onImgUpload } from "../../../service/post";
import MakeBtns from "./btns/MakeBtns";
import MakeHeader from "./header/MakeHeader";
import styles from "./MakeContentItem.module.scss";
import MakeTag from "./tag/MakeTag";
import MakeUpload from "./upload/MakeUpload";

const MakeContentItem = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [contentItem, setContentItem] = useState<IAddContentItem>({
    tag: [],
    imgUrl: "",
  });

  const onAddTag = (item: string) => {
    if (contentItem) {
      const tagArr = [...contentItem.tag];
      if (tagArr.find((tag: string) => tag === item)) {
        return;
      }
      tagArr.push(item);
      setContentItem({ ...contentItem, tag: tagArr });
    }
  };

  const onUploadImg = useCallback(async (e: any) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });

    const result = await onImgUpload(imageFormData);
    console.log(result);
  }, []);

  const onSubmit = () => {
    if (textRef && textRef.current) {
      const item = { ...contentItem, text: textRef.current.value };
      console.log(item);
    }
  };

  return (
    <div className={styles.makeContentItem}>
      <div className={styles.container}>
        <MakeHeader />
        <MakeUpload onUploadImg={onUploadImg} />
        <MakeTag onAddTag={onAddTag} />
        <div className={styles.contentBox}>
          <textarea
            ref={textRef}
            className={styles.content}
            cols={20}
            rows={20}
          ></textarea>
        </div>
        <MakeBtns onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default MakeContentItem;
