import { useInput } from "../../../../hooks/useInput";
import styles from "./MakeTag.module.scss";

interface IMakeTag {
  onAddTag: (item: string) => void;
}

const MakeTag = ({ onAddTag }: IMakeTag) => {
  const text = useInput("");

  const onSubmit = () => {
    if (text.value !== "") {
      onAddTag(text.value);
    }
  };

  return (
    <div className={styles.makeTag}>
      <div className={styles.insert}>
        <input
          className={styles.tagText}
          type="text"
          onChange={text.onChange}
        ></input>
        <button className={styles.tagSubmit} onClick={onSubmit}>
          등록
        </button>
      </div>
      <div className={styles.tagPlace} id="tagPlace"></div>
    </div>
  );
};

export default MakeTag;
