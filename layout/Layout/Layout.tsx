import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/shared/loading/Loading";
import { useWindowSize } from "../../hooks/useWindowHook";
import { onGetUser } from "../../service/user";
import useData from "../../store/data";
import usePosts from "../../store/post";
import useUser from "../../store/user";
import { MOBILE_SIZE } from "../../utils/common";
import Header from "../header/Header";
import MobileHeader from "../header/mobileHeader/mobileHeader";
import styles from "./Layout.module.scss";

const Layout = ({ component }: any) => {
  const windowWidth = useWindowSize();
  const { user, setUser } = useUser();
  const [rendering, setRendering] = useState<boolean>(false);
  const { loading } = useData();

  useEffect(() => {
    setRendering(true);
    checkUser();
  }, []);

  const checkUser = async () => {
    if (!user) return;
    const result = await onGetUser(user.id);
    if (result) {
      setUser(result);
    }
  };

  return rendering ? (
    <div className={styles.layout}>
      {user && (windowWidth < MOBILE_SIZE ? <MobileHeader /> : <Header />)}
      {component}
      {loading && <Loading />}
    </div>
  ) : (
    <></>
  );
};

export default Layout;
