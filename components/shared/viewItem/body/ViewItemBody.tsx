import { useEffect, useState } from "react";
import styles from "./ViewItemBody.module.scss";
import usePosts from "../../../../store/post";
import { IPost } from "../../../../interface/IPost";
import useData from "../../../../store/data";
import { IViewItem } from "../../../../interface/IViewItem";

const ViewItemBody = ({ item }: IViewItem) => {
  const { post, setHashTagPosts } = usePosts();
  const { setSearchTag } = useData();
  const [content, setContent] = useState<IPost | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (item && item.tag) {
      const tag = item.tag.split("#");
      const tagItem: string[] = [];
      tag.forEach((data: string) => {
        if (data !== "") tagItem.push("#" + data);
      });
      setTags(tagItem);
      setContent(item);
    }
  }, [item]);

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
