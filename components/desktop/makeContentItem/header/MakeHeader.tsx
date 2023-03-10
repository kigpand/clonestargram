import useUser from "../../../../store/user";
import styles from "./MakeHeader.module.scss";

const MakeHeader = () => {
  const { user } = useUser();

  return (
    <div className={styles.makeHeader}>
      <img
        src={
          user && user.userImg
            ? `${process.env.NEXT_PUBLIC_API_URL}/${user.userImg}`
            : "/profileImg.png"
        }
        className={styles.img}
        alt="contentImg"
      ></img>
      <div className={styles.nickname}>{user!.nickname}</div>
    </div>
  );
};

export default MakeHeader;
