import styles from "./MakeHeader.module.scss";

const MakeHeader = () => {
  return (
    <div className={styles.makeHeader}>
      <img src="/profileImg.png" className={styles.img} alt="contentImg"></img>
      <div className={styles.nickname}>nickname</div>
    </div>
  );
};

export default MakeHeader;
