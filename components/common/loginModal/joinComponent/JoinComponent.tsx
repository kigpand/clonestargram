import { useForm } from "react-hook-form";
import styles from "./JoinComponent.module.scss";
import { JoinType } from "../../../../type/InputType";
import IDInput from "../../Input/IDInput/IDInput";
import PWInput from "../../Input/PWInput/PWInput";
import EmailInput from "../../Input/emailInput/EmailInput";
import PhoneInput from "../../Input/CommonInput/PhoneInput";
import { addUser, onIdCheck } from "../../../../service/user";
import React from "react";

type Props = {
  handleCloseJoin: () => void;
};

export default function JoinComponent({ handleCloseJoin }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinType>();

  const handleJoinSubmit = handleSubmit(async (data) => {
    const user: any = {
      ...data,
      name: data.id,
    };

    const idCheck = await onIdCheck(user.id);
    if (idCheck) {
      return alert("중복된 아이디입니다");
    }

    await addUser(user)
      .then(() => {
        alert("회원가입이 완료됬습니다");
        handleCloseJoin();
      })
      .catch((e: any) => {
        console.error(e);
        alert("오류가 발생했습니다");
      });
  });

  function handleStopProppergation(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <main className={styles.joinComponent} onClick={handleStopProppergation}>
      <div className={styles.title}>회원 정보를 입력해주세요</div>
      <IDInput register={register} required errors={errors} />
      <PWInput register={register} required errors={errors} />
      <EmailInput register={register} required errors={errors} />
      <PhoneInput register={register} required errors={errors} />
      <button className={styles.joinButton} onClick={handleJoinSubmit}>
        회원가입
      </button>
      <button className={styles.prevButton} onClick={handleCloseJoin}>
        이전
      </button>
    </main>
  );
}
