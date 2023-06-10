import { useEffect, useState } from "react";
import useContent from "../../../../store/content";
import useUser from "../../../../store/user";
import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";
import { onIdCheck } from "../../../../service/user";
import { IUser } from "../../../../interface/IUser";
import SubLoading from "../../subLoading/SubLoading";

const ViewItemHeader = () => {
  const { currentContent } = useContent();
  const { user } = useUser();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user && currentContent) {
      setLoading(true);
      onIdCheck(currentContent.username).then((data: IUser) => {
        setImgUrl(data.image);
        setNickname(data.name);
        setLoading(false);
      });
    }
  }, [user]);

  const changeLoading = (flag: boolean) => {
    setLoading(flag);
  };

  return (
    <div className={styles.viewItemHeader}>
      {loading && <SubLoading />}
      <img
        src={imgUrl !== "" ? `${imgUrl}` : "/profileImg.png"}
        alt="prifle"
        className={styles.img}
      />
      <div className={styles.text}>{nickname}</div>
      <div className={styles.btn}>
        {user?.id !== currentContent!.id && (
          <HeaderFollow
            currentContent={currentContent!}
            changeLoading={changeLoading}
          />
        )}
      </div>
    </div>
  );
};

export default ViewItemHeader;
