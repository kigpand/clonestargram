import { IPost } from "../../../../interface/IPost";
import AddComment from "../../../common/addComment/AddComment";
import ViewItemBody from "../../../common/viewItem/body/ViewItemBody";
import ViewItemComment from "../../../common/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../../common/viewItem/header/ViewItemHeader";
import styles from "./MobilePostItem.module.scss";

interface IMobilePostItem {
  post: IPost;
}

const MobilePostItem = ({ post }: IMobilePostItem) => {
  return (
    <div className={styles.postItem}>
      <ViewItemHeader item={post} />
      <img
        src={post.image ? `${post.image}` : "/noimg.png"}
        className={styles.front}
        alt="postImg"
      />
      <ViewItemBody item={post} />
      <ViewItemComment item={post} />
      <AddComment item={post} />
    </div>
  );
};

export default MobilePostItem;
