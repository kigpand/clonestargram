import { useEffect, useState } from "react";
import { IViewItem } from "../../../../interface/IViewItem";
import Comment from "../../comment/Comment";
import styles from "./ViewItemComment.module.scss";
import { IPost } from "../../../../interface/IPost";

const ViewItemComment = ({ item }: IViewItem) => {
  const [content, setContent] = useState<IPost | null>(null);

  useEffect(() => {
    if (item) {
      setContent(item);
    }
  }, [item]);

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
