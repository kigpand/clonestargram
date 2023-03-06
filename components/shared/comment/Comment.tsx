import styles from "./Comments.module.scss";
import CommentText from "./text/CommentText";

interface IComment {
  info: any;
}

const Comment = ({ info }: IComment) => {
  return (
    <div className={styles.comment}>
      <img src="profileImg.png" alt="profile" className={styles.img} />
      <CommentText
        nickName={info.nickname}
        content={info.content}
        time={info.updatedAt}
      />
    </div>
  );
};

export default Comment;
