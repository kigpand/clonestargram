import { IInput } from "../../../../interface/IInput";
import styles from "./IDInput.module.scss";

interface IIDInput {
  id: IInput;
}

const IDInput = ({ id }: IIDInput) => {
  return (
    <div className={styles.idInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>아이디</div>
        <input
          className={styles.input}
          type="text"
          value={id.value}
          onChange={id.onChange}
        />
      </div>
    </div>
  );
};

export default IDInput;
