import { UseFormRegister } from "react-hook-form";
import styles from "./CommonInput.module.scss";

interface ICommonInput {
  register: UseFormRegister<any>;
  required: boolean;
  errors: any;
}

const CommonInput = ({ register, required, errors }: ICommonInput) => {
  return (
    <div className={styles.commonInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>전화번호</div>
        <input className={styles.input} {...register("phone", { required })} />
      </div>
      {errors.phone && <div>전화번호 양식이 아닙니다.</div>}
    </div>
  );
};

export default CommonInput;
