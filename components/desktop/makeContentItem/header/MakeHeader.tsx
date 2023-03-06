import useUser from "../../../../store/user";
import styles from "./MakeHeader.module.scss";

const MakeHeader = () => {
  const { user } = useUser();

  return (
    <div className={styles.makeHeader}>
      <img src="/profileImg.png" className={styles.img} alt="contentImg"></img>
      <div className={styles.nickname}>{user.data.nickname}</div>
    </div>
  );
};

export default MakeHeader;
