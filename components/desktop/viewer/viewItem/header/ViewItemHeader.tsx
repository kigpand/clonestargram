import { onDeletePost, onLoadPost } from "../../../../../service/post";
import useContent from "../../../../../store/content";
import usePosts from "../../../../../store/post";
import useUser from "../../../../../store/user";
import styles from "./ViewItemHeader.module.scss";

const ViewItemHeader = () => {
  const { currentContent, clearCurrentContent } = useContent();
  const { setPosts } = usePosts();
  const { user } = useUser();

  const onDeleteBtn = async () => {
    try {
      await onDeletePost(currentContent.id, { id: user!.id }).then(async () => {
        const res = await onLoadPost();
        const post = res.data;
        setPosts(post);
        clearCurrentContent();
      });
    } catch {
      alert("게시글 삭제에 실패했습니다");
    }
  };

  return (
    <div className={styles.viewItemHeader}>
      <img
        src={
          currentContent && currentContent.User.userImg
            ? `${process.env.NEXT_PUBLIC_API_URL}/${currentContent.User.userImg}`
            : "/profileImg.png"
        }
        alt="prifle"
        className={styles.img}
      />
      <div className={styles.text}>{currentContent.User.nickname}</div>
      <div className={styles.btn}>
        {user?.id === currentContent.User.id ? (
          <img
            src="/delete.png"
            alt="delete"
            className={styles.delete}
            onClick={onDeleteBtn}
          />
        ) : (
          <div>follow</div>
        )}
      </div>
    </div>
  );
};

export default ViewItemHeader;
