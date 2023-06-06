import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import useUser from "../../../store/user";
import styles from "./AddComment.module.scss";
import useContent from "../../../store/content";
import { usePost } from "../../../hooks/usePost";
import { IPost } from "../../../interface/IPost";

const AddComment = () => {
  const { posts, updatePosts } = usePost();
  const { user } = useUser();
  const { currentContent, setCurrentContent } = useContent();
  const [addFlag, setAddFlag] = useState<boolean>(false);
  const input = useInput("");

  useEffect(() => {
    if (posts && posts.length > 0) {
      const result = posts.find(
        (item: IPost) => item._id === currentContent?._id
      );
      if (result) setCurrentContent(result);
    }
  }, [posts]);

  useEffect(() => {
    if (input.value === "") {
      setAddFlag(false);
    } else {
      setAddFlag(true);
    }
  }, [input]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user || !currentContent) return;

    fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({
        postId: currentContent._id,
        id: user.id,
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
      .catch(() => alert("댓글 등록에 실패하였습니다"));
    // .finally(() => setLoading(true));
  };

  return (
    <div className={styles.addComment}>
      <img
        src={
          user && user.image
            ? `http://localhost:4000/${user.image}`
            : "/profileImg.png"
        }
        alt="profile"
        className={styles.img}
      />
      <input
        type="text"
        className={styles.input}
        value={input.value || ""}
        onChange={input.onChange}
        placeholder="댓글 달기"
      />
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
