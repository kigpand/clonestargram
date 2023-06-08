import { useEffect } from "react";
import useContent from "../../../../store/content";
import useUser from "../../../../store/user";
import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";
import { onIdCheck } from "../../../../service/user";

const ViewItemHeader = () => {
  const { currentContent } = useContent();
  const { user } = useUser();
  useEffect(() => {
    if (user && currentContent) {
      onIdCheck(user.id).then((data: any) => {});
    }
  }, [user]);

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
        {user?.id !== currentContent!.id && (
          <HeaderFollow currentContent={currentContent!} />
        )}
      </div>
    </div>
  );
};

export default ViewItemHeader;
