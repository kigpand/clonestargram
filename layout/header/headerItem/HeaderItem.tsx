"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./headerItems.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import usePosts from "../../../store/post";
import useUserInfo from "../../../hooks/useUserInfo";
import LoginModal from "../../../components/common/loginModal/LoginModal";

const HeaderItems = () => {
  const router = useRouter();
  const { user, onClearUser } = useUserInfo();
  const { clearHastTagPosts } = usePosts();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const homeBtn = () => {
    clearHastTagPosts();
    router.push("/");
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
      {user ? (
        <RiLogoutBoxFill className={styles.icon} onClick={logoutBtn} />
      ) : (
        <RiLoginBoxFill
          className={styles.icon}
          onClick={() => setIsLogin(true)}
        />
      )}
      {isLogin && <LoginModal closeLoginModal={() => setIsLogin(false)} />}
    </div>
  );
};

export default HeaderItems;
