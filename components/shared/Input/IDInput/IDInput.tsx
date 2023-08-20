import { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./IDInput.module.scss";
import { JoinType } from "../../../../type/InputType";

interface IIDInput {
  register: UseFormRegister<JoinType>;
  required: boolean;
  errors: FieldErrors<JoinType>;
}

const IDInput = ({ register, required, errors }: IIDInput) => {
  return (
    <div className={styles.idInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>아이디</div>
        <input
          className={styles.input}
          {...register("id", {
            required,
            minLength: {
              value: 3,
              message: "3글자 이상 입력해주세요.",
            },
            maxLength: {
              value: 12,
              message: "12글자 이하만 입력가능합니다.",
            },
          })}
        />
        {errors.id && <div className={styles.error}>{errors.id.message}</div>}
      </div>
    </div>
  );
};

export default IDInput;
