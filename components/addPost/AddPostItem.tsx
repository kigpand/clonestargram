"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useRef, useState } from "react";
import styles from "./AddPostItem.module.scss";
import Loading from "../shared/loading/Loading";
import useUserInfo from "../../hooks/useUserInfo";
import AddPostHeader from "./header/AddPostHeader";
import AddPostUploadImg from "./upload/AddPostUploadImg";
import AddPostTag from "./tag/AddPostTag";
import AddPostBtns from "./btns/AddPostBtns";

const AddPostItem = () => {
  const { user } = useUserInfo();
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
    if (!textRef || !textRef.current) return;
    setLoading(true);

    const formData = new FormData();
    if (imgUrl) formData.append("file", imgUrl);
    formData.append("tag", tags.toString().replaceAll(",", ""));
    formData.append("content", textRef.current.value);

    fetch("/api/posts/", { method: "POST", body: formData })
      .then((res) => {
        if (!res.ok) return alert("게시글 등록에 실패하였습니다");
        router.push("/post");
      })
      .catch(() => alert("게시글 등록에 실패하였습니다"))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.addPostItem}>
      {loading && <Loading />}
      <div className={styles.container}>
        <AddPostHeader />
        <AddPostUploadImg
          onUploadImg={onUploadImg}
          loading={loading}
          imgUrl={imgUrl}
        />
        <AddPostTag tags={tags} onAddTag={onAddTag} />
        <div className={styles.contentBox}>
          <textarea
            ref={textRef}
            className={styles.content}
            cols={20}
            rows={20}
          ></textarea>
        </div>
        <AddPostBtns onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddPostItem;
