import useUserInfo from "../../../hooks/useUserInfo";
import styles from "./MakeHeader.module.scss";

const MakeHeader = () => {
  const { user } = useUserInfo();

  return (
    <div className={styles.makeHeader}>
      <img
        src={user && user.image ? `${user.image}` : "/profileImg.png"}
        className={styles.img}
        alt="contentImg"
      ></img>
      <div className={styles.nickname}>{user?.name || ""}</div>
    </div>
  );
};

export default MakeHeader;
