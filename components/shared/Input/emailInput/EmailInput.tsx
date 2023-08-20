import { UseFormRegister } from "react-hook-form";
import styles from "./EmailInput.module.scss";

interface IEmailInput {
  register: UseFormRegister<any>;
  required: boolean;
  errors: any;
}

const EmailInput = ({ register, errors }: IEmailInput) => {
  return (
    <div className={styles.emailInput}>
      <div className={styles.title}>이메일</div>
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
      {errors.email && <div>이메일 양식이 아닙니다.</div>}
    </div>
  );
};

export default EmailInput;
