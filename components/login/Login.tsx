"use client";

import { useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowHook";
import useData from "../../store/data";
import DeskLogin from "./desktop/DeskLogin";
import styles from "./Login.module.scss";
import MobileLogin from "./mobile/MobileLogin";
import { MOBILE_SIZE } from "../../utils/common";

const Login = () => {
  const windowSize = useWindowSize();

  return (
    <div className={styles.login}>
      {windowSize < MOBILE_SIZE ? <MobileLogin /> : <DeskLogin />}
    </div>
  );
};

export default Login;
