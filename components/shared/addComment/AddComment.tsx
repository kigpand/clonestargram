import { useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import { onAddComment } from "../../../service/post";
import useContent from "../../../store/content";
import useUser from "../../../store/user";
import styles from "./AddComment.module.scss";

const AddComment = () => {
  const { user } = useUser();
  const { currentContent, setCurrentContent } = useContent();
  const [addFlag, setAddFlag] = useState<boolean>(false);
  const input = useInput("");

  useEffect(() => {
    if (input.value === "") {
      setAddFlag(false);
    } else {
      setAddFlag(true);
    }
  }, [input]);

  const onSubmit = async () => {
    const data = {
      id: user?.id,
      nickname: user?.nickname,
      comment: input.value,
      postid: currentContent.id,
    };
    try {
      const result = await onAddComment(data);
      const comment = {
        ...result.data,
        User: {
          id: user?.id,
          nickname: user?.nickname,
          userImg: user?.userImg,
        },
      };
      const comments = [comment, ...currentContent.Comments];
      const newItem = { ...currentContent, Comments: comments };
      setCurrentContent(newItem);
      input.onClear();
    } catch {
      alert("댓글 등록에 실패했습니다");
    }
  };

  return (
    <div className={styles.addComment}>
      <img
        src={
          user && user.userImg
            ? `${process.env.NEXT_PUBLIC_API_URL}/${user.userImg}`
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
