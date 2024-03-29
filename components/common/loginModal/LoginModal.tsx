import React, { useEffect, useState } from "react";
import styles from "./LoginModal.module.scss";
import JoinComponent from "./joinComponent/JoinComponent";
import LoginComponent from "./loginComponent/LoginComponent";

type Props = {
  closeLoginModal: () => void;
};

export default function LoginModal({ closeLoginModal }: Props) {
  const [isJoin, setIsJoin] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  function handleModalClick(e: React.MouseEvent<HTMLDivElement>) {
    closeLoginModal();
  }

  return (
    <section className={styles.modal} onClick={handleModalClick}>
      {isJoin ? (
        <JoinComponent handleCloseJoin={() => setIsJoin(false)} />
      ) : (
        <LoginComponent
          handleOpenJoin={() => setIsJoin(true)}
          closeLoginModal={closeLoginModal}
        />
      )}
    </section>
  );
}
