import { IInput } from "../../../../interface/IInput";
import styles from "./CommonInput.module.scss";

const typeObj: any = {
  EMAIL: "이메일",
  PHONE: "전화번호",
};

interface ICommonInput {
  type: string;
  input: IInput;
  onInputEvent?: (e: React.ChangeEvent<HTMLInputElement>, num: number) => void;
  num?: number;
}

const CommonInput = ({ type, input, onInputEvent, num }: ICommonInput) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputEvent && num) {
      onInputEvent(e, num);
    }
  };

  return (
    <div className={styles.commonInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>{typeObj[type]}</div>
        <input
          className={styles.input}
          type="number"
          value={input.value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CommonInput;
