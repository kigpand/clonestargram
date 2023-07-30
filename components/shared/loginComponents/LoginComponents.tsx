"use client";

import React, { useEffect, useState } from "react";
import styles from "./LoginComponents.module.scss";
import { useInput } from "../../../hooks/useInput";
import useUser from "../../../store/user";
import Join from "../join/Join";
import { useRouter } from "next/navigation";
import { onCheckUser } from "../../../service/user";

const LoginComponents = () => {
  const id = useInput("");
  const pw = useInput("");
  const [join, setJoin] = useState<boolean>(false);
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/post");
    }
  }, [user]);

  const unJoin = () => {
    setJoin(false);
  };

  const onSubmit = async () => {
    const user = await onCheckUser(id.value, pw.value);
    if (!user) return alert("로그인 정보가 없습니다.");
    setUser({
      id: user.username,
      name: user.name,
      phone: user.phone,
      email: user.email,
      image: user.image || null,
      intro: user.intro || "",
      followings: user.following,
      followers: user.followers,
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
