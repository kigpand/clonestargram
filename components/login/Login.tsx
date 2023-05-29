import useData from "../../store/data";
import DeskLogin from "./desktop/DeskLogin";
import styles from "./Login.module.scss";
import MobileLogin from "./mobile/MobileLogin";

const Login = () => {
  // const { isMobile } = useData();
  return (
    <div className={styles.login}>
      <DeskLogin />
      {/* {isMobile ? <MobileLogin /> : <DeskLogin />} */}
    </div>
  );
};

export default Login;
