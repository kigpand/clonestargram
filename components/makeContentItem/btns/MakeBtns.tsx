import { useRouter } from "next/navigation";
import styles from "./MakeBtns.module.scss";

interface IMakeBtns {
  onSubmit: () => void;
}

const MakeBtns = ({ onSubmit }: IMakeBtns) => {
  const router = useRouter();

  const onCancleBtn = () => {
    router.push("/post");
  };

  return (
    <div className={styles.makeBtns}>
      <button className={styles.submitBtn} onClick={onSubmit}>
        등록
      </button>
      <button className={styles.cancleBtn} onClick={onCancleBtn}>
        취소
      </button>
    </div>
  );
};

export default MakeBtns;
