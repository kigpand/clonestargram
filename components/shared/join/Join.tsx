import { useInput } from "../../../hooks/useInput";
import { addUser, onIdCheck, onJoin } from "../../../service/user";
import CommonInput from "../Input/CommonInput/CommonInput";
import IDInput from "../Input/IDInput/IDInput";
import PWInput from "../Input/PWInput/PWInput";
import styles from "./Join.module.scss";

interface IJoin {
  unJoin: () => void;
}

const Join = ({ unJoin }: IJoin) => {
  const id = useInput("");
  const pw = useInput("");
  const pwCheck = useInput("");
  const email = useInput("");
  const phone = useInput("");

  const onSubmit = async () => {
    if (
      id.value === "" ||
      pw.value === "" ||
      pwCheck.value === "" ||
      email.value === "" ||
      phone.value === ""
    ) {
      return alert("빈칸을 전부 채워주세요");
    }

    // if (pw.value !== pwCheck.value) return alert("비밀번호가 다릅니다");
    // if (!(await onIdCheck(id.value))) {
    //   id.onClear();
    //   return alert("중복된 아이디입니다");
    // }
    const data = {
      id: id.value,
      pw: pw.value,
      name: id.value,
      email: email.value,
      phone: phone.value,
    };

    const user = await addUser(data);
    console.log(user);

    // const join = await onJoin(data);
    // if (join === "ok") return alert("회원가입이 되었습니다");
  };

  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <div className={styles.title}>회원 정보를 입력해주세요</div>
        <IDInput id={id} />
        <PWInput pw={pw} pwCheck={pwCheck} />
        <CommonInput type="EMAIL" input={email} />
        <CommonInput type="PHONE" input={phone} />
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
