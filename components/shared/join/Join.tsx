import { useState } from "react";
import { useInput } from "../../../hooks/useInput";
import { addUser, onIdCheck } from "../../../service/user";
import CommonInput from "../Input/CommonInput/CommonInput";
import IDInput from "../Input/IDInput/IDInput";
import PWInput from "../Input/PWInput/PWInput";
import styles from "./Join.module.scss";
import EmailInput from "../Input/emailInput/EmailInput";

interface IJoin {
  unJoin: () => void;
}

const Join = ({ unJoin }: IJoin) => {
  const id = useInput("");
  const pw = useInput("");
  const pwCheck = useInput("");
  const email = useInput("");
  const [domain, setDomain] = useState<string>("gmail.com");
  const phone = useInput("");

  const onChangeDomain = (text: string) => {
    setDomain(text);
  };

  const onSubmit = async () => {
    // 비밀번호 정규표현식
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    if (
      id.value === "" ||
      pw.value === "" ||
      pwCheck.value === "" ||
      email.value === "" ||
      phone.value === ""
    ) {
      return alert("빈칸을 전부 채워주세요");
    }
    if (id.value.length < 6) {
      return alert("아이디는 여섯글자 이상으로 해주세요");
    }
    if (pw.value !== pwCheck.value) return alert("비밀번호가 다릅니다");
    if (!reg.test(pw.value)) return alert("비밀번호 유형을 맞춰주세요");
    const idCheck = await onIdCheck(id.value);
    if (idCheck) {
      id.onClear();
      return alert("중복된 아이디입니다");
    }
    const data = {
      id: id.value,
      pw: pw.value,
      name: id.value,
      email: email.value + "@" + domain,
      phone: phone.value,
    };

    await addUser(data)
      .then(() => {
        alert("회원가입이 완료됬습니다");
        unJoin();
      })
      .catch((e: any) => {
        console.error(e);
        alert("오류가 발생했습니다");
      });
  };

  const onInputEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
    num: number
  ) => {
    if (e.target.value.length > num) {
      e.target.value = e.target.value.substring(0, num);
    } else {
      phone.onChange(e);
    }
  };

  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <div className={styles.title}>회원 정보를 입력해주세요</div>
        <IDInput id={id} />
        <PWInput pw={pw} pwCheck={pwCheck} />
        <EmailInput email={email} onChangeDomain={onChangeDomain} />
        <CommonInput
          type="PHONE"
          input={phone}
          onInputEvent={onInputEvent}
          num={11}
        />
        <div className={styles.joinBtn} onClick={onSubmit}>
          가입하기
        </div>
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
