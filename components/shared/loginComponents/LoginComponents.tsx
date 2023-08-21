"use client";

import React, { useEffect, useState } from "react";
import styles from "./LoginComponents.module.scss";
import Join from "../join/Join";
import useUserInfo from "../../../hooks/useUserInfo";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginType } from "../../../type/InputType";

const LoginComponents = () => {
  const [join, setJoin] = useState<boolean>(false);
  const { onCheckLogin, onLogin } = useUserInfo();
  const { register, handleSubmit } = useForm<LoginType>();

  //  home url 접근시 user login token 확인, token이 존재할 경우 /post로 페이지 이동.
  useEffect(() => {
    onCheckLogin();
  }, []);

  const unJoin = () => {
    setJoin(false);
  };

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    if (data.id === "") return alert("아이디를 입력해주세요");
    if (data.pw === "") return alert("비밀번호를 입력해주세요");
    onLogin(data.id, data.pw);
  };

  return (
    <div className={styles.loginComponents}>
      <img src="/login.png" className={styles.img} alt="login" />
      <div className={styles.title}>Sign in</div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("id")}
          className={styles.inputText}
          type="text"
          placeholder="아이디"
        ></input>
        <input
          {...register("pw")}
          className={styles.inputText}
          type="password"
          placeholder="비밀번호"
        ></input>
        <input type="submit" className={styles.loginBtn} value="Login"></input>
      </form>
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
