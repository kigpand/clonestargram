import { IPost } from "../../interface/IPost";
import usePosts from "../../store/post";
import MobilePostItem from "../post/mobile/MobilePostItem/MobilePostItem";
import PostItem from "../shared/postItem/PostItem";
import styles from "./HashTagPosts.module.scss";
import HashTagPostsHeader from "./header/HashTagPostsHeader";

interface IHashTagPosts {
  isMobile: boolean;
}

const HashTagPosts = ({ isMobile }: IHashTagPosts) => {
  const { hashTagPosts } = usePosts();

  return (
    <div className={styles.hashTagPosts}>
      <HashTagPostsHeader />
      <div className={styles.lists}>
        {hashTagPosts.map((item: IPost, i: number) => {
          return isMobile ? (
            <MobilePostItem post={item} key={i} />
          ) : (
            <PostItem post={item} key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default HashTagPosts;
