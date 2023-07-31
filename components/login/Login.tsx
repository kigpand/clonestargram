import styles from "./Login.module.scss";
import LoginComponents from "../shared/loginComponents/LoginComponents";

const Login = () => {
  return (
    <div className={styles.login}>
      <img src="/loginBack.jpg" className={styles.loginImg} alt="login"></img>
      <div className={styles.loginItems}>
        <LoginComponents />
      </div>
    </div>
  );
};

export default Login;
