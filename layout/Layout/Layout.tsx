import { useRouter } from "next/router";
import styles from "./Layout.module.scss";

interface ILayout {
  component: React.ReactNode;
}

const Layout = ({ component }: ILayout) => {
  return <div className={styles.layout}>{component}</div>;
};

export default Layout;
