import { onDeletePost, onLoadPost } from "../../../../service/post";
import useContent from "../../../../store/content";
import usePosts from "../../../../store/post";
import useUser from "../../../../store/user";
import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";

interface IViewItemHeader {
  viewItem: any;
}

const ViewItemHeader = ({ viewItem }: IViewItemHeader) => {
  const { clearCurrentContent } = useContent();
  const { user } = useUser();

  const onDeleteBtn = async () => {};

  return (
    <div className={styles.viewItemHeader}>
      <img
        src={
          viewItem && viewItem.User.userImg
            ? `http://localhost:4000/${viewItem.User.userImg}`
            : "/profileImg.png"
        }
        alt="prifle"
        className={styles.img}
      />
      <div className={styles.text}>{viewItem.User.nickname}</div>
      <div className={styles.btn}>
        {user?.id === viewItem.User.id ? (
          <img
            src="/delete.png"
            alt="delete"
            className={styles.delete}
            onClick={onDeleteBtn}
          />
        ) : (
          <HeaderFollow viewItem={viewItem} />
        )}
      </div>
    </div>
  );
};

export default ViewItemHeader;
