import { IPost } from "../../../interface/IPost";
import AddComment from "../../common/addComment/AddComment";
import ViewItemBody from "../../common/viewItem/body/ViewItemBody";
import ViewItemComment from "../../common/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../common/viewItem/header/ViewItemHeader";
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
