import React, { useEffect } from "react";
import styles from "./ProfileInput.module.scss";

interface IProfileInput {
  type: string;
  value: string;
  onChange: any;
}

const typeItem: any = {
  ID: "아이디",
  nickname: "닉네임",
  phone: "전화 번호",
  email: "이메일",
};

const ProfileInput = React.memo(({ type, value, onChange }: IProfileInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{typeItem[type]}</label>
      <input
        type={type === "phone" ? "number" : "text"}
        className={styles.input}
        disabled={type === "ID" || type === "email" ? true : false}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
});

ProfileInput.displayName = "profileInput";

export default ProfileInput;
