import styles from "./PostSkeleton.module.scss";

export default function PostSkeleton() {
  return (
    <div className={styles.postSkeleton}>
      <div className={styles.cardLoading}>
        <div className={styles.skeletonBar}></div>
      </div>
    </div>
  );
}
