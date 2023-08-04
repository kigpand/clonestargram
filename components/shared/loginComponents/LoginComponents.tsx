"use client";

import React, { useEffect, useState } from "react";
import styles from "./LoginComponents.module.scss";
import { useInput } from "../../../hooks/useInput";
import Join from "../join/Join";
import { useRouter } from "next/navigation";
import useUserInfo from "../../../hooks/useUserInfo";

const LoginComponents = () => {
  const id = useInput("");
  const pw = useInput("");
  const [join, setJoin] = useState<boolean>(false);
  const { onCheckLogin, onLogin } = useUserInfo();
  const router = useRouter();

  //  home url 접근시 user login token 확인, token이 존재할 경우 /post로 페이지 이동.
  useEffect(() => {
    onCheckLogin();
  }, []);

  const unJoin = () => {
    setJoin(false);
  };

  const onSubmit = async () => {
    if (id.value === "") return alert("이이디를 입력해주세요");
    if (pw.value === "") return alert("비밀번호를 입력해주세요");
    onLogin(id.value, pw.value);
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
