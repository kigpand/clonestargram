import styles from "./ProfileInput.module.scss";

interface IProfileInput {
  type: string;
}

const typeItem: any = {
  ID: "아이디",
  NICK: "닉네임",
  PHONE: "전화 번호",
  EMAIL: "이메일",
};

const ProfileInput = ({ type }: IProfileInput) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{typeItem[type]}</label>
      <input
        type="text"
        className={styles.input}
        value="id"
        defaultValue="나중에"
        disabled={type === "ID" ? true : false}
      ></input>
    </div>
  );
};

export default ProfileInput;
