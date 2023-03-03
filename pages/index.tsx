import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useEffect } from "react";
import Contents from "../components/desktop/contents/Contents";
import Viewer from "../components/desktop/viewer/Viewer";
import DeskLogin from "../components/login/desktop/DeskLogin";
import { onLoadPost } from "../service/post";
import useContent from "../store/content";
import usePosts from "../store/post";
import useUser from "../store/user";
import styles from "../styles/Home.module.scss";

const Home: NextPage = ({
  post,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const { user } = useUser();
  const { setPosts } = usePosts();
  const { currentContent } = useContent();
  useEffect(() => {
    if (post) {
      setPosts(post);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  return (
    <div className={styles.container} style={{ height: user ? "95%" : "100%" }}>
      {user ? <Contents /> : <DeskLogin />}
      {currentContent && <Viewer />}
    </div>
  );
};

export async function getStaticProps() {
  const res = await onLoadPost();
  const post = res.data;

  return { props: { post } };
}

export default Home;
