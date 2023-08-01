"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "./headerItems.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillDoorOpenFill } from "react-icons/bs";
import usePosts from "../../../store/post";
import useUserInfo from "../../../hooks/useUserInfo";

const HeaderItems = () => {
  const router = useRouter();
  const { onClearUser } = useUserInfo();
  const { clearHastTagPosts } = usePosts();

  const homeBtn = () => {
    clearHastTagPosts();
    router.push("/post");
  };

  const profileBtn = () => {
    router.push("/profile");
  };

  const followBtn = () => {
    router.push("/follow");
  };

  const contentBtn = () => {
    router.push("/addPost");
  };

  const logoutBtn = async () => {
    fetch("/api/logout", {
      method: "POST",
    })
      .then(() => {
        onClearUser();
        router.push("/");
      })
      .catch((e) => {
        alert("로그아웃에 실패했습니다.");
        console.error(e);
      });
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
