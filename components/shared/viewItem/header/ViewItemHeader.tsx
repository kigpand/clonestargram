import { IPost } from "../../../../interface/IPost";
import { onDeletePost, onLoadPost } from "../../../../service/post";
import useContent from "../../../../store/content";
import usePosts from "../../../../store/post";
import useUser from "../../../../store/user";
import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";

const ViewItemHeader = () => {
  const { currentContent, clearCurrentContent } = useContent();
  const { user } = useUser();

  const onDeleteBtn = async () => {};

  return (
    <div className={styles.viewItemHeader}>
      <img
        src={
          currentContent!.image
            ? `http://localhost:4000/${currentContent!.image}`
            : "/profileImg.png"
        }
        alt="prifle"
        className={styles.img}
      />
      <div className={styles.text}>{currentContent!.username}</div>
      <div className={styles.btn}>
        {user?.id === currentContent!.id ? (
          <img
            src="/delete.png"
            alt="delete"
            className={styles.delete}
            onClick={onDeleteBtn}
          />
        ) : (
          <HeaderFollow currentContent={currentContent!} />
        )}
      </div>
    </div>
  );
};

export default ViewItemHeader;
