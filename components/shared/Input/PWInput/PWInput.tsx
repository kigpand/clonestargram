import { useEffect, useState } from "react";
import { IInput } from "../../../../interface/IInput";
import styles from "./PWInput.module.scss";

interface IPWInput {
  pw: IInput;
  pwCheck: IInput;
}

const PWInput = ({ pw, pwCheck }: IPWInput) => {
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    if (pw.value !== "" && pwCheck.value !== "" && pw.value !== pwCheck.value) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [pw, pwCheck]);

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
