import { addUser, onIdCheck } from "../../../service/user";
import IDInput from "../Input/IDInput/IDInput";
import PWInput from "../Input/PWInput/PWInput";
import styles from "./Join.module.scss";
import EmailInput from "../Input/emailInput/EmailInput";
import { SubmitHandler, useForm } from "react-hook-form";
import PhoneInput from "../Input/CommonInput/PhoneInput";
import { JoinType } from "../../../type/InputType";

interface IJoin {
  unJoin: () => void;
}

const Join = ({ unJoin }: IJoin) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinType>();

  const onSubmit: SubmitHandler<JoinType> = async (data) => {
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
        unJoin();
      })
      .catch((e: any) => {
        console.error(e);
        alert("오류가 발생했습니다");
      });
  };

  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.title}>회원 정보를 입력해주세요</div>
          <IDInput register={register} required errors={errors} />
          <PWInput register={register} required errors={errors} />
          <EmailInput register={register} required errors={errors} />
          <PhoneInput register={register} required errors={errors} />
          <input type="submit" className={styles.joinBtn}></input>
        </form>
        <img
          src="/close.png"
          alt="close"
          className={styles.closeBtn}
          onClick={unJoin}
        />
      </div>
    </div>
  );
};

export default Join;
