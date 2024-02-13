import { useForm } from "react-hook-form";
import styles from "./LoginComponent.module.scss";
import { LoginType } from "../../../../type/InputType";
import useUserInfo from "../../../../hooks/useUserInfo";
import React from "react";
import Input from "../../../../common/Input";

type Props = {
  closeLoginModal: () => void;
  handleOpenJoin: () => void;
};

interface FormValue {
  id: string;
  pw: string;
}

export default function LoginComponent({
  closeLoginModal,
  handleOpenJoin,
}: Props) {
  const { onLogin } = useUserInfo();
  const { control, handleSubmit } = useForm<FormValue>({
    defaultValues: {
      id: "",
      pw: "",
    },
  });

  const handleSubmitButton = handleSubmit(async (data) => {
    await onLogin(data.id, data.pw, closeLoginModal);
  });

  function handleStopProppergation(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <main className={styles.loginComponent} onClick={handleStopProppergation}>
      <div className={styles.title}>로그인</div>
      <Input name="id" control={control} rules={{ required: "필수" }} />
      <Input name="pw" control={control} rules={{ required: "필수" }} />
      {/* <input
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
      ></input> */}
      <button className={styles.loginButton} onClick={handleSubmitButton}>
        로그인
      </button>
      <button className={styles.joinButton} onClick={handleOpenJoin}>
        회원가입
      </button>
    </main>
  );
}
