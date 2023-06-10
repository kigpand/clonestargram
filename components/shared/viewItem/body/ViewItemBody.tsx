import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useContent from "../../../../store/content";
import styles from "./ViewItemBody.module.scss";

const ViewItemBody = () => {
  const { currentContent } = useContent();
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (currentContent && currentContent.tag) {
      const tag = currentContent.tag.split("#");
      const tagItem: string[] = [];
      tag.forEach((data: string) => {
        if (data !== "") tagItem.push("#" + data);
      });
      setTags(tagItem);
    }
  }, [currentContent]);

  const onTagClick = async (tag: string) => {
    const item = tag.substring(1);
    // const result = await onSearchHashTag(item);
    // if (result.data && result.data.length > 0) {
    //   setHashTagPosts(result.data);
    //   setSearchTag(item);
    //   clearCurrentContent();
    //   router.push("/hashTag");
    // } else {
    //   alert("검색 결과가 없습니다.");
    // }
  };

  return (
    <div className={styles.viewItemBody}>
      <div className={styles.content}>{currentContent?.content}</div>
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
