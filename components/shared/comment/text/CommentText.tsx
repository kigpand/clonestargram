import styles from "./CommentText.module.scss";

interface ICommentText {
  nickName: string;
  content: string;
}

const CommentText = ({ nickName, content }: ICommentText) => {
  return (
    <div className={styles.commentText}>
      <div className={styles.text}>
        <div className={styles.nickName}>{nickName}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

export default CommentText;
