import { UseFormRegister } from "react-hook-form";
import styles from "./IDInput.module.scss";

interface IIDInput {
  register: UseFormRegister<any>;
  required: boolean;
  errors: any;
}

const IDInput = ({ register, required, errors }: IIDInput) => {
  return (
    <div className={styles.idInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>아이디</div>
        <input className={styles.input} {...register("id", { required })} />
        {errors.id && <div>아이디를 입력해주세요</div>}
      </div>
    </div>
  );
};

export default IDInput;
