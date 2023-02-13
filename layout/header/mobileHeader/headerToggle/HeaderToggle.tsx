import styles from "./HeaderToggle.module.scss";

const HeaderToggle = () => {
  return (
    <div className={styles.headerToggle}>
      <img
        src="/friendBtn.png"
        className={styles.friendBtn}
        alt="friendBtn"
      ></img>
      <img
        src="/contentBtn.png"
        className={styles.contentBtn}
        alt="contentBtn"
      ></img>
      <img
        src="/profileBtn.png"
        className={styles.profileBtn}
        alt="profileBtn"
      ></img>
      <img src="/homeBtn.png" className={styles.homeBtn} alt="homeBtn"></img>
      <img src="/logout.png" className={styles.logOutBtn} alt="logoutBtn"></img>
    </div>
  );
};

export default HeaderToggle;
