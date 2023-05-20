import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Contents from "../components/desktop/contents/Contents";
import styles from "../styles/Home.module.scss";

const Post: NextPage = ({
  post,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <div className={styles.container} style={{ height: "95%" }}>
      <Contents />
      {/* {currentContent && <Viewer />} */}
    </div>
  );
};

export default Post;
