import { useEffect, useState } from "react";
import styles from "./LoginModal.module.scss";
import JoinComponent from "./joinComponent/JoinComponent";
import LoginComponent from "./loginComponent/LoginComponent";

export default function LoginModal() {
  const [isJoin, setIsJoin] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  function handleChangeJoinState(state: boolean) {
    setIsJoin(state);
  }

  return (
    <section className={styles.modal}>
      {isJoin ? <JoinComponent /> : <LoginComponent />}
    </section>
  );
}
