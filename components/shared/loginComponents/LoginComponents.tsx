"use client";

import React, { useEffect, useState } from "react";
import styles from "./LoginComponents.module.scss";
import { useInput } from "../../../hooks/useInput";
import Join from "../join/Join";
import { useRouter } from "next/navigation";

const LoginComponents = () => {
  const id = useInput("");
  const pw = useInput("");
  const [join, setJoin] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/login/", {
      method: "get",
    })
      .then((data) => data.json())
      .then(() => {
        router.push("/post");
      })
      .catch(() => console.log("로그인 계정 토큰이 없습니다."));
  }, []);

  const unJoin = () => {
    setJoin(false);
  };

  const onSubmit = async () => {
    fetch("/api/login/", {
      method: "post",
      body: JSON.stringify({
        id: id.value,
        pw: pw.value,
      }),
    })
      .then((data) => data.json())
      .then(() => {
        router.push("/post");
      })
      .catch((e) => {
        console.error(e);
        alert("로그인에 실패했습니다");
      });
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
