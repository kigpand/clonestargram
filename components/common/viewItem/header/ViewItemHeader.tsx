import HeaderFollow from "./follow/HeaderFollow";
import styles from "./ViewItemHeader.module.scss";
import { onIdCheck } from "../../../../service/user";
import { IViewItem } from "../../../../interface/IViewItem";
import useUserInfo from "../../../../hooks/useUserInfo";
import useSWR from "swr";

const ViewItemHeader = ({ item }: IViewItem) => {
  const { user } = useUserInfo();
  const { data: contentUserInfo } = useSWR(
    `viewItem${item.id}`,
    () => onIdCheck(item.username),
    {
      suspense: true,
    }
  );

  return (
    <div className={styles.viewItemHeader}>
      <img
        src={
          contentUserInfo?.image !== ""
            ? `${contentUserInfo.image}`
            : "/profileImg.png"
        }
        alt="prifle"
        className={styles.img}
      />
      <div className={styles.text}>{contentUserInfo.name}</div>
      <div className={styles.btn}>
        {user?.id !== item?.id && <HeaderFollow currentContent={item} />}
      </div>
    </div>
  );
};

export default ViewItemHeader;
