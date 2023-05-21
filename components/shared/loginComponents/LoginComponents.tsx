import React, { useEffect, useState } from "react";
import styles from "./LoginComponents.module.scss";
import { useInput } from "../../../hooks/useInput";
import { onLogin } from "../../../service/auth";
import useUser from "../../../store/user";
import Join from "../join/Join";
import { useRouter } from "next/router";
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
    if (user.length === 0) return alert("로그인 정보가 없습니다.");
    setUser({
      id: user[0].username,
      name: user[0].name,
      phone: user[0].phone,
      email: user[0].email,
      image: user[0].image || null,
      intro: user[0].intro || "",
      followings: user[0].following,
      followers: user[0].followers,
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
