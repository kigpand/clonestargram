import { useEffect } from "react";
import useContent from "../../../../store/content";
import useUser from "../../../../store/user";
import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";
import { onIdCheck } from "../../../../service/user";

const ViewItemHeader = () => {
  const { currentContent, clearCurrentContent } = useContent();
  const { user } = useUser();

  useEffect(() => {
    if (user && currentContent) {
      console.log(currentContent);
      onIdCheck(user.id).then((data: any) => {
        console.log(data);
      });
    }
  }, [user]);

  const onDeleteBtn = async () => {};

  return (
    <div className={styles.viewItemHeader}>
      <img
        src={
          currentContent!.userImage
            ? `${currentContent!.userImage}`
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
