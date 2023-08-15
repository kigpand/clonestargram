import useUserInfo from "../../../hooks/useUserInfo";
import SubLoading from "../../shared/subLoading/SubLoading";
import styles from "./AddPostHeader.module.scss";

const AddPostHeader = () => {
  const { user } = useUserInfo();

  return (
    <div className={styles.addPostHeader}>
      {!user && <SubLoading />}
      <img
        src={user && user.image ? `${user.image}` : "/profileImg.png"}
        className={styles.img}
        alt="contentImg"
      ></img>
      <div className={styles.nickname}>{user?.name || ""}</div>
    </div>
  );
};

export default AddPostHeader;
