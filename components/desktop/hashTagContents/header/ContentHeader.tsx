import useData from "../../../../store/data";
import usePosts from "../../../../store/post";
import styles from "./ContentHeader.module.scss";

const ContentHeader = () => {
  const { hashTagPosts } = usePosts();
  const { searchTag } = useData();

  return (
    <div className={styles.contentHeader}>
      <div className={styles.hashTag}>#{searchTag}</div>
      <div className={styles.length}>
        게시물: <b>{hashTagPosts.length}</b>
      </div>
    </div>
  );
};

export default ContentHeader;
