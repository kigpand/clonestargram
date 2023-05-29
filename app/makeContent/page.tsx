import { NextPage } from "next";
import MakeContentItem from "../../components/desktop/makeContentItem/MakeContentItem";
import styles from "../../styles/Home.module.scss";
import Header from "../../layout/header/Header";

const MakeContent: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MakeContentItem />
    </div>
  );
};

export default MakeContent;
