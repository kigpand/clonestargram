import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../../styles/Home.module.scss";
import Header from "../../layout/header/Header";
import ContentsContainer from "../../components/container/ContentsContainer";

const Post: NextPage = ({
  post,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <div className={styles.container} style={{ height: "95%" }}>
      <Header />
      <ContentsContainer />
    </div>
  );
};

export default Post;
