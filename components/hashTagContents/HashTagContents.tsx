import { IPost } from "../../interface/IPost";
import usePosts from "../../store/post";
import ContentItem from "../mobile/MobileContents/item/ContentItem";
import ContentsItem from "../shared/contentsItem/ContentsItem";
import styles from "./HashTagContents.module.scss";
import ContentHeader from "./header/ContentHeader";

interface IHashTagContents {
  isMobile: boolean;
}

const HashTagContents = ({ isMobile }: IHashTagContents) => {
  const { hashTagPosts } = usePosts();

  return (
    <div className={styles.hashTagContents}>
      <ContentHeader />
      <div className={styles.lists}>
        {hashTagPosts.map((item: IPost, i: number) => {
          return isMobile ? (
            <ContentItem post={item} key={i} />
          ) : (
            <ContentsItem post={item} key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default HashTagContents;
