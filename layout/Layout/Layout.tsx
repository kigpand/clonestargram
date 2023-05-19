"use client";

import { useEffect, useState } from "react";
import Loading from "../../components/shared/loading/Loading";
import { onGetUser } from "../../service/user";
import useData from "../../store/data";
import useUser from "../../store/user";
import { MOBILE_SIZE } from "../../utils/common";
import Header from "../header/Header";
import MobileHeader from "../header/mobileHeader/mobileHeader";
import styles from "./Layout.module.scss";

interface ILayout {
  component: React.ReactNode;
}

const Layout = ({ component }: ILayout) => {
  const { user, setUser } = useUser();
  const [rendering, setRendering] = useState<boolean>(false);
  const { loading, isMobile, setMobile } = useData();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= MOBILE_SIZE) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
    setRendering(true);
    checkUser();
  }, []);

  const checkUser = async () => {
    if (!user) return;
    const result = await onGetUser();
    if (result) {
      setUser(result);
    }
  };

  return rendering ? (
    <div className={styles.layout}>
      {user && (isMobile ? <MobileHeader /> : <Header />)}
      {component}
      {loading && <Loading />}
    </div>
  ) : (
    <></>
  );
};

export default Layout;
