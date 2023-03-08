import { useRouter } from "next/router";
import React from "react";
import { onLogout } from "../../../service/auth";
import useUser from "../../../store/user";
import styles from "./headerItems.module.scss";

const HeaderItems = () => {
  const router = useRouter();
  const { setUser } = useUser();

  const homeBtn = () => {
    router.push("/");
  };

  const profileBtn = () => {
    router.push("/profile");
  };

  const followBtn = () => {
    router.push("/follow");
  };

  const contentBtn = () => {
    router.push("/makeContent");
  };

  const logoutBtn = async () => {
    await onLogout().then(() => {
      setUser(null);
      router.push("/");
    });
  };

  return (
    <div className={styles.headerItems}>
      <img
        src="/friendBtn.png"
        className={styles.friendBtn}
        onClick={followBtn}
        alt="friendBtn"
      ></img>
      <img
        src="/contentBtn.png"
        className={styles.contentBtn}
        onClick={contentBtn}
        alt="contentBtn"
      ></img>
      <img
        src="/profileBtn.png"
        className={styles.profileBtn}
        onClick={profileBtn}
        alt="profileBtn"
      ></img>
      <img
        src="/homeBtn.png"
        className={styles.homeBtn}
        onClick={homeBtn}
        alt="homeBtn"
      ></img>
      <img
        src="/logout.png"
        className={styles.logOutBtn}
        onClick={logoutBtn}
        alt="logoutBtn"
      ></img>
    </div>
  );
};

export default HeaderItems;
