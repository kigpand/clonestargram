import { IPost } from "../../../interface/IPost";
import usePosts from "../../../store/post";
import ContentsItem from "../../shared/contentsItem/ContentsItem";
import styles from "./HashTagContents.module.scss";

const HashTagContents = () => {
  const { hashTagPosts } = usePosts();

  return (
    <div className={styles.hashTagContents}>
      <div className={styles.lists}>
        {hashTagPosts.map((item: IPost, i: number) => {
          return <ContentsItem post={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default HashTagContents;
