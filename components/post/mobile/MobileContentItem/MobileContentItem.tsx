import { IPost } from "../../../../interface/IPost";
import AddComment from "../../../shared/addComment/AddComment";
import ViewItemBody from "../../../shared/viewItem/body/ViewItemBody";
import ViewItemComment from "../../../shared/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../../shared/viewItem/header/ViewItemHeader";
import styles from "./MobileContentItem.module.scss";

interface IMobileContentItem {
  post: IPost;
}

const MobileContentItem = ({ post }: IMobileContentItem) => {
  return (
    <div className={styles.contentItem}>
      <ViewItemHeader item={post} />
      <img
        src={post.image ? `${post.image}` : "/noimg.png"}
        className={styles.front}
        alt="postImg"
      />
      <div className={styles.texts}>
        <ViewItemBody item={post} />
        <ViewItemComment item={post} />
        <AddComment item={post} />
      </div>
    </div>
  );
};

export default MobileContentItem;
