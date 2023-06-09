import styles from "./SubLoading.module.scss";

const SubLoading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default SubLoading;
