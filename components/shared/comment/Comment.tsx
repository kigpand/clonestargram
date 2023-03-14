import { useEffect } from "react";
import { IComment } from "../../../interface/IComment";
import styles from "./Comments.module.scss";
import CommentText from "./text/CommentText";

interface ICommentContainer {
  info: IComment;
}

const Comment = ({ info }: ICommentContainer) => {
  return (
    <div className={styles.comment}>
      <img
        src={
          info.User.userImg
            ? `http://localhost:4000/${info.User.userImg}`
            : "/profileImg.png"
        }
        alt="profile"
        className={styles.img}
      />
      <CommentText
        nickName={info.nickname}
        content={info.content}
        time={info.updatedAt}
      />
    </div>
  );
};

export default Comment;
