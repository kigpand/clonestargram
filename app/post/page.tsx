import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../../styles/Home.module.scss";
import Header from "../../layout/header/Header";
import Post from "../../components/post/Post";

const PostPage: NextPage = () => {
  return (
    <div className={styles.container} style={{ height: "95%" }}>
      <Header />
      <Post />
    </div>
  );
};

export default PostPage;
