import { useEffect, useState } from "react";
import useUser from "../../../../store/user";
import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";
import { onIdCheck } from "../../../../service/user";
import { IUser } from "../../../../interface/IUser";
import SubLoading from "../../subLoading/SubLoading";
import { IPost } from "../../../../interface/IPost";
import { IViewItem } from "../../../../interface/IViewItem";

const ViewItemHeader = ({ item }: IViewItem) => {
  const { user } = useUser();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<IPost | null>(null);

  useEffect(() => {
    const contentData = item;
    if (user && contentData) {
      setContent(contentData);
      setLoading(true);
      onIdCheck(contentData.username).then((data: IUser) => {
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
