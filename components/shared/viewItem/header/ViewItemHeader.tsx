import { useEffect, useState } from "react";
import useContent from "../../../../store/content";
import useUser from "../../../../store/user";
import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";
import { onIdCheck } from "../../../../service/user";
import { IUser } from "../../../../interface/IUser";

const ViewItemHeader = () => {
  const { currentContent } = useContent();
  const { user } = useUser();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  useEffect(() => {
    if (user && currentContent) {
      onIdCheck(currentContent.username).then((data: IUser) => {
        setImgUrl(data.image);
        setNickname(data.name);
      });
    }
  }, [user]);

  return (
    <div className={styles.viewItemHeader}>
      <img
        src={imgUrl !== "" ? `${imgUrl}` : "/profileImg.png"}
        alt="prifle"
        className={styles.img}
      />
      <div className={styles.text}>{nickname}</div>
      <div className={styles.btn}>
        {user?.id !== currentContent!.id && (
          <HeaderFollow currentContent={currentContent!} />
        )}
      </div>
    </div>
  );
};

export default ViewItemHeader;
