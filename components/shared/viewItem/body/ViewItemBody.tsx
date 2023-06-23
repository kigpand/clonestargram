import { useEffect, useState } from "react";
import useContent from "../../../../store/content";
import styles from "./ViewItemBody.module.scss";
import usePosts from "../../../../store/post";
import { IPost } from "../../../../interface/IPost";
import useData from "../../../../store/data";
import { IViewItem } from "../../../../interface/IViewItem";

const ViewItemBody = ({ isMobile, item }: IViewItem) => {
  const { post, setHashTagPosts } = usePosts();
  const { setSearchTag } = useData();
  const { currentContent, clearCurrentContent } = useContent();
  const [content, setContent] = useState<IPost | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const contentData = isMobile ? item : currentContent;
    if (contentData && contentData.tag) {
      const tag = contentData.tag.split("#");
      const tagItem: string[] = [];
      tag.forEach((data: string) => {
        if (data !== "") tagItem.push("#" + data);
      });
      setTags(tagItem);
      setContent(contentData);
    }
  }, [currentContent, item]);

  const onTagClick = async (tag: string) => {
    const tagData = tag.substring(1);
    const filter = post.filter((postItem: IPost) => {
      const tag = postItem.tag.split("#");
      const result = tag.find((data: string) => data === tagData);
      if (result) return true;
      return false;
    });
    if (filter.length > 0) {
      setSearchTag(tagData);
      setHashTagPosts(filter);
      clearCurrentContent();
    }
  };

  return (
    <div className={styles.viewItemBody}>
      <div className={styles.content}>{content?.content}</div>
      <div className={styles.tags}>
        {tags.map((tag: string, i: number) => {
          return (
            <div className={styles.tag} key={i} onClick={() => onTagClick(tag)}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewItemBody;
