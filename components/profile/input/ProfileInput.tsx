import { useEffect } from "react";
import { useInput } from "../../../hooks/useInput";
import styles from "./ProfileInput.module.scss";

interface IProfileInput {
  type: string;
  onProfileChange: Function;
}

const typeItem: any = {
  ID: "아이디",
  NICK: "닉네임",
  PHONE: "전화 번호",
  EMAIL: "이메일",
};

const ProfileInput = ({ type, onProfileChange }: IProfileInput) => {
  const input = useInput("");

  useEffect(() => {
    onProfileChange(type, input.value);
  }, [input.value]);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{typeItem[type]}</label>
      <input
        type="text"
        className={styles.input}
        disabled={type === "ID" ? true : false}
        value={input.value || ""}
        onChange={input.onChange}
      ></input>
    </div>
  );
};

export default ProfileInput;
