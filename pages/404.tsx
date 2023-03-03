import { useRouter } from "next/router";
import styles from "../styles/Error.module.scss";

export default function Error404() {
  const router = useRouter();

  const onHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.error}>
      <div className={styles.title}>죄송합니다. 요청을 처리할 수 없습니다.</div>
      <div className={styles.back} onClick={onHome}>
        돌아가기
      </div>
    </div>
  );
}
