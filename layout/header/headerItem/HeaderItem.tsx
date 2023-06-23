"use client";

import { useRouter } from "next/navigation";
import React from "react";
import useUser from "../../../store/user";
import styles from "./headerItems.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillDoorOpenFill } from "react-icons/bs";

const HeaderItems = () => {
  const router = useRouter();
  const { setUser } = useUser();

  const homeBtn = () => {
    router.push("/post");
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
    setUser(null);
    router.push("/");
  };

  return (
    <div className={styles.headerItems}>
      <BsFillPeopleFill className={styles.icon} onClick={followBtn} />
      <BsPencilSquare className={styles.icon} onClick={contentBtn} />
      <BsPersonCircle className={styles.icon} onClick={profileBtn} />
      <BsFillHouseFill className={styles.icon} onClick={homeBtn} />
      <BsFillDoorOpenFill className={styles.icon} onClick={logoutBtn} />
    </div>
  );
};

export default HeaderItems;
