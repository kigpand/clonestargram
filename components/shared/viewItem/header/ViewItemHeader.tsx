import { useEffect, useState } from "react";
import useUser from "../../../../store/user";
import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";
import { onIdCheck } from "../../../../service/user";
import { IUser } from "../../../../interface/IUser";
import SubLoading from "../../subLoading/SubLoading";
import { IPost } from "../../../../interface/IPost";
import { IViewItem } from "../../../../interface/IViewItem";
import useUserInfo from "../../../../hooks/useUserInfo";

const ViewItemHeader = ({ item }: IViewItem) => {
  const { user } = useUserInfo();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<IPost | null>(null);

  useEffect(() => {
    if (item) {
      setContent(item);
      setLoading(true);
      onIdCheck(item.username).then((data: IUser) => {
        setImgUrl(data.image);
        setNickname(data.name);
        setLoading(false);
      });
    }
  }, []);

  const changeLoading = (flag: boolean) => {
    setLoading(flag);
  };

  return (
    <div className={styles.viewItemHeader}>
      {loading && <SubLoading />}
      <img
        src={imgUrl && imgUrl !== "" ? `${imgUrl}` : "/profileImg.png"}
        alt="prifle"
        className={styles.img}
      />
      <div className={styles.text}>{nickname}</div>
      <div className={styles.btn}>
        {user?.id !== content?.id && (
          <HeaderFollow
            currentContent={content!}
            changeLoading={changeLoading}
          />
        )}
      </div>
    </div>
  );
};

export default ViewItemHeader;
