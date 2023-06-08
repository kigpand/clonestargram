import styles from "./Comments.module.scss";
import CommentText from "./text/CommentText";
import { IComment } from "../../../interface/IPost";

interface ICommentContainer {
  info: IComment;
}

const Comment = ({ info }: ICommentContainer) => {
  return (
    <div className={styles.comment}>
      <img
        src={info.photo ? `${info.photo}` : "/profileImg.png"}
        alt="profile"
        className={styles.img}
      />
      <CommentText nickName={info.nickname} content={info.comment} />
    </div>
  );
};

export default Comment;
