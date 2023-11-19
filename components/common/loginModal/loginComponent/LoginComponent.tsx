import { useForm } from "react-hook-form";
import styles from "./LoginComponent.module.scss";
import { LoginType } from "../../../../type/InputType";
import { onLogin } from "../../../../service/auth";

export default function LoginComponent() {
  const { register, handleSubmit } = useForm<LoginType>();

  const handleSubmitButton = handleSubmit(async (data) => {
    await onLogin(data.id, data.pw).then((data) => console.log(data));
  });

  return (
    <main className={styles.loginComponent}>
      <div className={styles.title}>로그인</div>
      <input
        {...register("id")}
        className={styles.input}
        type="text"
        placeholder="아이디"
      ></input>
      <input
        {...register("pw")}
        className={styles.input}
        type="password"
        placeholder="비밀번호"
      ></input>
      <button className={styles.loginButton} onClick={handleSubmitButton}>
        로그인
      </button>
      <button className={styles.joinButton}>회원가입</button>
    </main>
  );
}
