"use client";

import { useEffect } from "react";
import useUser from "../../store/user";
import ProfileBody from "./body/ProfileBody";
import styles from "./ProfileMain.module.scss";
import useUserInfo from "../../hooks/useUserInfo";

const ProfileMain = () => {
  const { user } = useUserInfo();

  return <div className={styles.profileMain}>{user && <ProfileBody />}</div>;
};

export default ProfileMain;
