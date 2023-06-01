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
        src={
          info.image ? `http://localhost:4000/${info.image}` : "/profileImg.png"
        }
        alt="profile"
        className={styles.img}
      />
      <CommentText nickName={info.username} content={info.comment} />
    </div>
  );
};

export default Comment;
