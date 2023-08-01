import { useRouter } from "next/navigation";
import styles from "./AddPostBtns.module.scss";

interface IAddPostBtns {
  onSubmit: () => void;
}

const AddPostBtns = ({ onSubmit }: IAddPostBtns) => {
  const router = useRouter();

  const onCancleBtn = () => {
    router.push("/post");
  };

  return (
    <div className={styles.addPostBtns}>
      <button className={styles.submitBtn} onClick={onSubmit}>
        등록
      </button>
      <button className={styles.cancleBtn} onClick={onCancleBtn}>
        취소
      </button>
    </div>
  );
};

export default AddPostBtns;
