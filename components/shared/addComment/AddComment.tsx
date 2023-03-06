import { useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import useUser from "../../../store/user";
import styles from "./AddComment.module.scss";

const AddComment = () => {
  const { user } = useUser();
  const [addFlag, setAddFlag] = useState<boolean>(false);
  const input = useInput("");

  useEffect(() => {
    if (input.value === "") {
      setAddFlag(false);
    } else {
      setAddFlag(true);
    }
  }, [input]);

  return (
    <div className={styles.addComment}>
      <img
        src={
          user && user.userImg
            ? `${process.env.NEXT_PUBLIC_API_URL}/${user.userImg}`
            : "/profileImg.png"
        }
        alt="profile"
        className={styles.img}
      />
      <input
        type="text"
        className={styles.input}
        value={input.value || ""}
        onChange={input.onChange}
        placeholder="댓글 달기"
      />
      <div
        className={styles.add}
        style={{ color: addFlag ? "skyblue" : "lightgray" }}
      >
        등록
      </div>
    </div>
  );
};

export default AddComment;
