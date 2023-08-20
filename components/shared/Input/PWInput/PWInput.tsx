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
        <input
          className={styles.input}
          type="password"
          {...register("pw", {
            required,
            pattern: {
              value: /^[A-Za-z0-9]{6,20}$/,
              message: "비밀번호 형식에 맞지 않습니다",
            },
          })}
        />
        {errors.pw && <div className={styles.error}>{errors.pw.message}</div>}
      </div>
    </div>
  );
};

export default PWInput;
