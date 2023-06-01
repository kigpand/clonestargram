import { IPost } from "../../../interface/IPost";
import usePosts from "../../../store/post";
import ContentItem from "./item/ContentItem";
import styles from "./MobileContents.module.scss";

const MobileContents = () => {
  const { posts } = usePosts();
  return (
    <div className={styles.mobileContents}>
      {posts?.map((item: any, i: number) => {
        return <ContentItem post={item} key={i} />;
      })}
    </div>
  );
};

export default MobileContents;
