import { useWindowSize } from "../../hooks/useWindowHook";
import { MOBILE_SIZE } from "../../utils/common";
import Header from "../header/Header";
import MobileHeader from "../header/mobileHeader/mobileHeader";
import styles from "./Layout.module.scss";

const Layout = ({ component }: any) => {
  const windowWidth = useWindowSize();

  return (
    <div className={styles.layout}>
      {windowWidth < MOBILE_SIZE ? <MobileHeader /> : <Header />}
      {component}
    </div>
  );
};

export default Layout;
