import { useEffect, useState } from "react";
import styles from "./CommentText.module.scss";

interface ICommentText {
  nickName: string;
  content: string;
  time: string;
}

const CommentText = ({ nickName, content, time }: ICommentText) => {
  const [timeText, setTimeText] = useState<string>("");

  useEffect(() => {
    if (time) {
      const date = new Date(time);
      setTimeText(
        `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
      );
    }
  }, [time]);

  return (
    <div className={styles.commentText}>
      <div className={styles.text}>
        <div className={styles.nickName}>{nickName}</div>
        <div className={styles.content}>{content}</div>
      </div>
      <div className={styles.time}>{timeText}</div>
    </div>
  );
};

export default CommentText;
