import { useEffect } from "react";
import styles from "./Viewer.module.scss";
import ViewItem from "./viewItem/ViewItem";
import { IPost } from "../../interface/IPost";

type Props = {
  post: IPost;
  onCloseView: () => void;
};

const Viewer = ({ post, onCloseView }: Props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className={styles.viewer}>
      <img
        className={styles.img}
        src={post.image || "/noimg.png"}
        alt="viewerImg"
      />
      <ViewItem post={post} />
      <div className={styles.back} onClick={onCloseView} />
    </div>
  );
};

export default Viewer;
