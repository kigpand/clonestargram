import { NextPage } from "next";
import MakeContentItem from "../components/desktop/makeContentItem/MakeContentItem";
import styles from "../styles/Home.module.scss";

const MakeContent: NextPage = () => {
  return (
    <div className={styles.container}>
      <MakeContentItem />
    </div>
  );
};

export default MakeContent;
