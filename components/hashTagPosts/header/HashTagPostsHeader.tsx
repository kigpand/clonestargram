import useData from "../../../store/data";
import usePosts from "../../../store/post";
import styles from "./HashTagPostsHeader.module.scss";

const HashTagPostsHeader = () => {
  const { hashTagPosts } = usePosts();
  const { searchTag } = useData();

  return (
    <div className={styles.hashTagPostsHeader}>
      <div className={styles.hashTag}>#{searchTag}</div>
      <div className={styles.length}>
        게시물: <b>{hashTagPosts.length}</b>
      </div>
    </div>
  );
};

export default HashTagPostsHeader;
