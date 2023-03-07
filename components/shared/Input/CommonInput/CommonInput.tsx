import { IInput } from "../../../../interface/IInput";
import styles from "./CommonInput.module.scss";

const typeObj: any = {
  EMAIL: "이메일",
  PHONE: "전화번호",
};

interface ICommonInput {
  type: string;
  input: IInput;
}

const CommonInput = ({ type, input }: ICommonInput) => {
  return (
    <div className={styles.commonInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>{typeObj[type]}</div>
        <input
          className={styles.input}
          type="text"
          value={input.value}
          onChange={input.onChange}
        />
      </div>
    </div>
  );
};

export default CommonInput;
