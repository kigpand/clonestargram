import { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./PhoneInput.module.scss";
import { JoinType } from "../../../../type/InputType";

interface IPhoneInput {
  register: UseFormRegister<JoinType>;
  required: boolean;
  errors: FieldErrors<JoinType>;
}

const PhoneInput = ({ register, required, errors }: IPhoneInput) => {
  return (
    <div className={styles.phoneInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>전화번호</div>
        <input
          className={styles.input}
          type="number"
          maxLength={11}
          {...register("phone", {
            required: "전화번호를 입력해주세요",
            minLength: 11,
            maxLength: 11,
          })}
        />
        {errors.phone && (
          <div className={styles.error}>
            빈칸과 -를 제외한 11글자를 입력해주세요
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneInput;
