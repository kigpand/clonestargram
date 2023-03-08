import React, { useEffect, useState } from "react";
import styles from "./LoginComponents.module.scss";
import { useInput } from "../../../hooks/useInput";
import { onLogin } from "../../../service/auth";
import useUser from "../../../store/user";
import Join from "../join/Join";

const LoginComponents = () => {
  const id = useInput("");
  const pw = useInput("");
  const [join, setJoin] = useState<boolean>(false);
  const { setUser } = useUser();

  const unJoin = () => {
    setJoin(false);
  };

  const onSubmit = async () => {
    const result = await onLogin(id.value, pw.value);
    if (result) {
      delete result.data.password;
      setUser(result.data);
    }
  };

  return (
    <div className={styles.loginComponents}>
      <img src="/login.png" className={styles.img} alt="login" />
      <div className={styles.title}>Sign in</div>
      <input
        className={styles.inputText}
        type="text"
        placeholder="아이디"
        onChange={id.onChange}
      ></input>
      <input
        className={styles.inputText}
        type="password"
        placeholder="비밀번호"
        onChange={pw.onChange}
      ></input>
      <button className={styles.loginBtn} onClick={onSubmit}>
        Sign in
      </button>
      <div className={styles.others}>
        <div className={styles.join} onClick={() => setJoin(true)}>
          회원가입
        </div>
      </div>
      {join && <Join unJoin={unJoin} />}
    </div>
  );
};

export default LoginComponents;
