import { useInput } from "../../../hooks/useInput";
import styles from "./AddPostTag.module.scss";

interface IAddPostTag {
  tags: string[];
  onAddTag: (item: string) => void;
}

const AddPostTag = ({ tags, onAddTag }: IAddPostTag) => {
  const text = useInput("");

  const onSubmit = () => {
    if (tags.length === 3) return alert("태그는 3개이상 등록 불가능합니다!");
    if (text.value !== "") {
      onAddTag("#" + text.value);
      text.onClear();
    }
  };

  return (
    <div className={styles.addPostTag}>
      <div className={styles.insert}>
        <input
          className={styles.tagText}
          type="text"
          value={text.value}
          onChange={text.onChange}
        ></input>
        <button className={styles.tagSubmit} onClick={onSubmit}>
          등록
        </button>
      </div>
      <div className={styles.tagPlace}>
        {tags.map((item: string, i: number) => {
          return <div key={i}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default AddPostTag;
