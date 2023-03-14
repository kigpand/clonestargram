import { useEffect, useState } from "react";
import usePosts from "../../../../store/post";
import AddComment from "../../../shared/addComment/AddComment";
import ViewItemBody from "../../../shared/viewItem/body/ViewItemBody";
import ViewItemComment from "../../../shared/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../../shared/viewItem/header/ViewItemHeader";
import styles from "./ContentItem.module.scss";

interface IContentItem {
  post: any;
}

const ContentItem = ({ post }: IContentItem) => {
  const { posts, setPosts } = usePosts();
  const [updateItem, setUpdateItem] = useState<any>(null);

  useEffect(() => {
    if (updateItem) {
      const result = posts.find((post: any) => post.id === updateItem.id);
      if (result) {
        setPosts([
          updateItem,
          ...posts.filter((post: any) => post.id !== updateItem.id),
        ]);
        setUpdateItem(null);
      }
    }
  }, [updateItem]);

  return (
    <div className={styles.contentItem}>
      <ViewItemHeader viewItem={post} />
      <img
        className={styles.img}
        src={
          post.Images.length > 0
            ? `${process.env.NEXT_PUBLIC_API_URL + "/" + post.Images[0].src}`
            : "/noimg.png"
        }
        alt="viewerImg"
      />
      <div className={styles.texts}>
        <ViewItemBody viewItem={post} />
        <ViewItemComment viewItem={post} />
        <AddComment viewItem={post} setViewItem={setUpdateItem} />
      </div>
    </div>
  );
};

export default ContentItem;
