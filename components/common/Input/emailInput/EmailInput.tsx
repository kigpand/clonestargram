import { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./EmailInput.module.scss";
import { JoinType } from "../../../../type/InputType";

interface IEmailInput {
  register: UseFormRegister<JoinType>;
  required: boolean;
  errors: FieldErrors<JoinType>;
}

const EmailInput = ({ register, errors }: IEmailInput) => {
  return (
    <div className={styles.emailInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>이메일</div>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
        </div>
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
      </div>
    </div>
  );
};

export default EmailInput;
