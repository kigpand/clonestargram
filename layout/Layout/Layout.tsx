import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowHook";
import useUser from "../../store/user";
import { MOBILE_SIZE } from "../../utils/common";
import Header from "../header/Header";
import MobileHeader from "../header/mobileHeader/mobileHeader";
import styles from "./Layout.module.scss";

const Layout = ({ component }: any) => {
  const windowWidth = useWindowSize();
  const { user } = useUser();
  const router = useRouter();
  const [rendering, setRendering] = useState<boolean>(false);

  useEffect(() => {
    setRendering(true);
  }, []);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return rendering ? (
    <div className={styles.layout}>
      {user && (windowWidth < MOBILE_SIZE ? <MobileHeader /> : <Header />)}
      {component}
    </div>
  ) : (
    <></>
  );
};

export default Layout;
