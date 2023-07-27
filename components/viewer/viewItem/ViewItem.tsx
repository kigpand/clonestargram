import { IPost } from "../../../interface/IPost";
import AddComment from "../../shared/addComment/AddComment";
import ViewItemBody from "../../shared/viewItem/body/ViewItemBody";
import ViewItemComment from "../../shared/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../shared/viewItem/header/ViewItemHeader";
import styles from "./ViewItem.module.scss";

type Props = {
  post: IPost;
};

const ViewItem = ({ post }: Props) => {
  return (
    <div className={styles.viewItem}>
      <ViewItemHeader item={post} />
      <ViewItemBody item={post} />
      <ViewItemComment item={post} />
      <AddComment item={post} />
    </div>
  );
};

export default ViewItem;
