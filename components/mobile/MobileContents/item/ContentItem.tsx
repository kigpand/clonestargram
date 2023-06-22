import AddComment from "../../../shared/addComment/AddComment";
import ViewItemBody from "../../../shared/viewItem/body/ViewItemBody";
import ViewItemComment from "../../../shared/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../../shared/viewItem/header/ViewItemHeader";
import styles from "./ContentItem.module.scss";

interface IContentItem {
  post: any;
}

const ContentItem = ({ post }: IContentItem) => {
  return (
    <div className={styles.contentItem}>
      <ViewItemHeader />
      <img
        src={post.image ? `${post.image}` : "/noimg.png"}
        className={styles.front}
        alt="postImg"
      />
      <div className={styles.texts}>
        <ViewItemBody />
        <ViewItemComment />
        <AddComment />
      </div>
    </div>
  );
};

export default ContentItem;
