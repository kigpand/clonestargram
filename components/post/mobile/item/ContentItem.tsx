import { IPost } from "../../../../interface/IPost";
import AddComment from "../../../shared/addComment/AddComment";
import ViewItemBody from "../../../shared/viewItem/body/ViewItemBody";
import ViewItemComment from "../../../shared/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../../shared/viewItem/header/ViewItemHeader";
import styles from "./ContentItem.module.scss";

interface IContentItem {
  post: IPost;
}

const ContentItem = ({ post }: IContentItem) => {
  return (
    <div className={styles.contentItem}>
      <ViewItemHeader isMobile={true} item={post} />
      <img
        src={post.image ? `${post.image}` : "/noimg.png"}
        className={styles.front}
        alt="postImg"
      />
      <div className={styles.texts}>
        <ViewItemBody isMobile={true} item={post} />
        <ViewItemComment isMobile={true} item={post} />
        <AddComment isMobile={true} item={post} />
      </div>
    </div>
  );
};

export default ContentItem;
