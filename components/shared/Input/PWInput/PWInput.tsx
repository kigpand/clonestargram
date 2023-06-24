import { useEffect, useState } from "react";
import { IInput } from "../../../../interface/IInput";
import styles from "./PWInput.module.scss";

interface IPWInput {
  pw: IInput;
  pwCheck: IInput;
}

const PWInput = ({ pw, pwCheck }: IPWInput) => {
  const [check, setCheck] = useState<boolean>(false);
  const [wrongPw, setWrongPw] = useState<boolean>(false);

  useEffect(() => {
    if (pw.value !== "" && pwCheck.value !== "" && pw.value !== pwCheck.value) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [pw, pwCheck]);

  useEffect(() => {
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    if (pw.value !== "" && !reg.test(pw.value)) {
      setWrongPw(true);
    } else {
      setWrongPw(false);
    }
  }, [pw.value]);

  return (
    <div className={styles.pwInput}>
      <div className={styles.titleInput}>
        <div className={styles.label}>비밀번호</div>
        <input
          className={styles.input}
          type="password"
          value={pw.value}
          onChange={pw.onChange}
        />
      </div>
      {wrongPw ? (
        <div className={styles.warning}>사용하실수 없는 비밀번호입니다.</div>
      ) : pw.value === "" ? (
        <div className={styles.checkTitle}>영문,숫자,특수문자 조합 8~20자</div>
      ) : (
        <div className={styles.successTitle}>사용가능한 비밀번호입니다.</div>
      )}
      <div className={styles.titleInput}>
        <div className={styles.label}>비밀번호 확인</div>
        <input
          className={styles.input}
          type="password"
          value={pwCheck.value}
          onChange={pwCheck.onChange}
        />
      </div>
      {check && <div className={styles.warning}>비밀번호가 다릅니다.</div>}
    </div>
  );
};

export default PWInput;
