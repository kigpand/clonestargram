import Header from "../header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ component }: any) => {
  return (
    <div className={styles.layout}>
      <Header />
      {component}
    </div>
  );
};

export default Layout;
