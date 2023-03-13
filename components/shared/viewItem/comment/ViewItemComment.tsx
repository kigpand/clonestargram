import Comment from "../../comment/Comment";
import styles from "./ViewItemComment.module.scss";

interface IViewItemComment {
  viewItem: any;
}

const ViewItemComment = ({ viewItem }: IViewItemComment) => {
  return (
    <div className={styles.viewItemComment}>
      {viewItem &&
        viewItem.Comments.map((comment: any, i: number) => {
          return <Comment info={comment} key={i} />;
        })}
    </div>
  );
};

export default ViewItemComment;
