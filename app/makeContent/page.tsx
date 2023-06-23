import { NextPage } from "next";
import styles from "../../styles/Home.module.scss";
import Header from "../../layout/header/Header";
import MakeContentItem from "../../components/makeContentItem/MakeContentItem";

const MakeContent: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MakeContentItem />
    </div>
  );
};

export default MakeContent;
