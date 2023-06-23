import { useEffect, useState } from "react";
import { IViewItem } from "../../../../interface/IViewItem";
import useContent from "../../../../store/content";
import Comment from "../../comment/Comment";
import styles from "./ViewItemComment.module.scss";
import { IPost } from "../../../../interface/IPost";

const ViewItemComment = ({ isMobile, item }: IViewItem) => {
  const { currentContent } = useContent();
  const [content, setContent] = useState<IPost | null>(null);

  useEffect(() => {
    const data = isMobile ? item : currentContent;
    if (data) {
      setContent(data);
    }
  }, [item, currentContent]);

  return (
    <div className={styles.viewItemComment}>
      {content &&
        content.comments?.map((comment: any, i: number) => {
          return <Comment info={comment} key={i} />;
        })}
    </div>
  );
};

export default ViewItemComment;
