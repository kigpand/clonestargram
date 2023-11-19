import { IViewItem } from "../../../../interface/IViewItem";
import Comment from "../../comment/Comment";
import styles from "./ViewItemComment.module.scss";

const ViewItemComment = ({ item }: IViewItem) => {
  return (
    <div className={styles.viewItemComment}>
      {item?.comments?.map((comment: any, i: number) => {
        return <Comment info={comment} key={i} />;
      })}
    </div>
  );
};

export default ViewItemComment;
