import styles from "./PWInput.module.scss";
import { UseFormRegister } from "react-hook-form";

interface IPWInput {
  register: UseFormRegister<any>;
  required: boolean;
  errors: any;
}

const PWInput = ({ register, required, errors }: IPWInput) => {
  return (
    <div className={styles.pwInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>비밀번호</div>
        <input className={styles.input} {...register("pw", { required })} />
        {errors.pw && <div>올바른 비밀번호가 아닙니다.</div>}
      </div>
    </div>
  );
};

export default PWInput;
