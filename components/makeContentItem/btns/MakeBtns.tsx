import styles from "./MakeBtns.module.scss";

const MakeBtns = () => {
  return (
    <div className={styles.makeBtns}>
      <button className={styles.submitBtn}>등록</button>
      <button className={styles.cancleBtn}>취소</button>
    </div>
  );
};

export default MakeBtns;
