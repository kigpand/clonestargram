import styles from "./MakeTag.module.scss";

const MakeTag = () => {
  return (
    <div className={styles.makeTag}>
      <div className={styles.insert}>
        <input className={styles.tagText} type="text"></input>
        <button className={styles.tagSubmit}>등록</button>
        <button className={styles.tagCancle}>취소</button>
      </div>
      <div className={styles.tagPlace} id="tagPlace"></div>
    </div>
  );
};

export default MakeTag;
