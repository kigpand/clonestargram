import { NextPage } from "next";
import ViewItem from "../components/desktop/viewItem/ViewItem";
import styles from "../styles/Home.module.scss";

const View: NextPage = () => {
  return (
    <div className={styles.container}>
      <ViewItem />
    </div>
  );
};

export default View;
