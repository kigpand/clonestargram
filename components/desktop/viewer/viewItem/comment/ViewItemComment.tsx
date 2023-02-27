import useContent from "../../../../../store/content";
import Comment from "../../../../shared/comment/Comment";
import styles from "./ViewItemComment.module.scss";

const ViewItemComment = () => {
  const { currentContent } = useContent();

  return (
    <div className={styles.viewItemComment}>
      {currentContent &&
        currentContent.Comments.map((comment: any, i: number) => {
          return <Comment info={comment} key={i} />;
        })}
    </div>
  );
};

export default ViewItemComment;
