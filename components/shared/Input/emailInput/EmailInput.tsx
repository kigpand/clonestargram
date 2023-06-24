import { IInput } from "../../../../interface/IInput";
import styles from "./EmailInput.module.scss";

interface IEmailInput {
  email: IInput;
  onChangeDomain: (text: string) => void;
}

const EmailInput = ({ email, onChangeDomain }: IEmailInput) => {
  const changeDomain = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeDomain(e.target.value);
  };

  return (
    <div className={styles.emailInput}>
      <div className={styles.title}>이메일</div>
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          value={email.value}
          onChange={email.onChange}
        />
        <span>@</span>
        <select className={styles.select} onChange={changeDomain}>
          <option key="gmail.com" value="gmail.com">
            gmail.com
          </option>
          <option key="naver.com" value="naver.com">
            naver.com
          </option>
          <option key="daum.net" value="daum.net">
            daum.net
          </option>
        </select>
      </div>
    </div>
  );
};

export default EmailInput;
