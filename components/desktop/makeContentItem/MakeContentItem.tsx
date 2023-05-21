import { useRouter } from "next/router";
import React, { useCallback, useRef, useState } from "react";
import { onAddPost, onImgUpload } from "../../../service/post";
import useUser from "../../../store/user";
import MakeBtns from "./btns/MakeBtns";
import MakeHeader from "./header/MakeHeader";
import styles from "./MakeContentItem.module.scss";
import MakeTag from "./tag/MakeTag";
import MakeUpload from "./upload/MakeUpload";

const MakeContentItem = () => {
  const { user } = useUser();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [imgUrl, setImgUrl] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onAddTag = (item: string) => {
    const tagArr = [...tags];
    if (tagArr.find((tag: string) => tag === item)) {
      return;
    }
    tagArr.push(item);
    setTags(tagArr);
  };

  const onUploadImg = useCallback(async (e: any) => {
    setImgUrl(e.target.files[0]);
  }, []);

  const onSubmit = async () => {
    if (!user) return;
    // if (textRef && textRef.current) {
    //   const formData = new FormData();
    //   imgUrl.forEach((data) => {
    //     formData.append("image", data);
    //   });
    //   formData.append("tag", tags.toString().replaceAll(",", ""));
    //   formData.append("content", textRef.current.value);
    //   formData.append("id", String(user.id));
    //   formData.append("nickname", user.nickname);
    //   try {
    //     await onAddPost(formData);
    //     router.push("/post");
    //   } catch (e) {
    //     alert("게시글 등록에 실패했습니다");
    //   }
    // }
  };

  return (
    <div className={styles.makeContentItem}>
      <div className={styles.container}>
        <MakeHeader />
        <MakeUpload
          onUploadImg={onUploadImg}
          loading={loading}
          imgUrl={imgUrl}
        />
        <MakeTag tags={tags} onAddTag={onAddTag} />
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
