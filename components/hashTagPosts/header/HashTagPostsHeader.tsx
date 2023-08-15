import useData from "../../../store/data";
import usePosts from "../../../store/post";
import styles from "./HashTagPostsHeader.module.scss";
import { BsArrowClockwise } from "react-icons/bs";

const HashTagPostsHeader = () => {
  const { hashTagPosts, clearHastTagPosts } = usePosts();
  const { searchTag } = useData();

  return (
    <div className={styles.hashTagPostsHeader}>
      <div className={styles.hashTag}>
        <span>#{searchTag}</span>
        <BsArrowClockwise
          className={styles.reload}
          onClick={clearHastTagPosts}
        />
      </div>
      <div className={styles.length}>
        게시물: <b>{hashTagPosts.length}</b>
      </div>
    </div>
  );
};

export default HashTagPostsHeader;
