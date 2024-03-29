"use client";

import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import styles from "./AddComment.module.scss";
import { usePost } from "../../../hooks/usePost";
import Loading from "../loading/Loading";
import { IViewItem } from "../../../interface/IViewItem";
import useUserInfo from "../../../hooks/useUserInfo";

const AddComment = ({ item }: IViewItem) => {
  const { updatePosts } = usePost();
  const { user } = useUserInfo();
  const [addFlag, setAddFlag] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const input = useInput("");

  useEffect(() => {
    if (input.value === "") {
      setAddFlag(false);
    } else {
      setAddFlag(true);
    }
  }, [input]);

  const handleBlockComment = () => {
    if (!user) return alert("로그인을 먼저 진행해주세요");
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user || !item) return;

    setLoading(true);
    fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({
        postId: item._id,
        comment: input.value,
        image: user.image || "",
        nickname: user.name,
      }),
    })
      .then((res) => {
        if (!res.ok) return alert("댓글 등록에 실패하였습니다");
        alert("댓글이 등록되었습니다");
        input.onClear();
        return updatePosts();
      })
      .catch(() => alert("댓글 등록에 실패하였습니다"))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.addComment} onClick={handleBlockComment}>
      {loading && <Loading />}
      <img
        src={user && user.image ? `${user.image}` : "/profileImg.png"}
        alt="profile"
        className={styles.img}
      />
      {user ? (
        <input
          type="text"
          className={styles.input}
          value={input.value || ""}
          onChange={input.onChange}
          placeholder="댓글 달기"
        />
      ) : (
        <div className={styles.placeholder}>로그인을 먼저 진행해주세요.</div>
      )}
      <div
        className={styles.add}
        style={{ color: addFlag ? "skyblue" : "lightgray" }}
        onClick={onSubmit}
      >
        등록
      </div>
    </div>
  );
};

export default AddComment;
