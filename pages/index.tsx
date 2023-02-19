import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useEffect } from "react";
import Contents from "../components/desktop/contents/Contents";
import { onLoadPost } from "../load/post";
import usePosts from "../store/post";
import styles from "../styles/Home.module.scss";

const Home: NextPage = ({
  post,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const { setPosts } = usePosts();
  useEffect(() => {
    if (post) {
      setPosts(post);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  return (
    <div className={styles.container}>
      <Contents />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await onLoadPost();
  const post = res.data;

  return { props: { post } };
}

export default Home;
