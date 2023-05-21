import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onSearchHashTag } from "../../../../service/post";
import useContent from "../../../../store/content";
import useData from "../../../../store/data";
import usePosts from "../../../../store/post";
import styles from "./ViewItemBody.module.scss";

const ViewItemBody = () => {
  const { currentContent, clearCurrentContent } = useContent();
  const { setHashTagPosts } = usePosts();
  const { setSearchTag } = useData();
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (currentContent && currentContent.tag) {
      const items = currentContent.tag.map((item: string) => {
        return "#" + item;
      });
      setTags(items);
    }
  }, [currentContent]);

  const onTagClick = async (tag: string) => {
    const item = tag.substring(1);
    const result = await onSearchHashTag(item);
    if (result.data && result.data.length > 0) {
      setHashTagPosts(result.data);
      setSearchTag(item);
      clearCurrentContent();
      router.push("/hashTag");
    } else {
      alert("검색 결과가 없습니다.");
    }
  };

  return (
    <div className={styles.viewItemBody}>
      <div className={styles.content}>{currentContent!.text}</div>
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
