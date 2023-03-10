import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useEffect, useState } from "react";
import Contents from "../components/desktop/contents/Contents";
import Viewer from "../components/desktop/viewer/Viewer";
import { onLoadPost } from "../service/post";
import useContent from "../store/content";
import usePosts from "../store/post";
import styles from "../styles/Home.module.scss";

const Post: NextPage = ({
  post,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const { posts, setPosts } = usePosts();
  const { currentContent } = useContent();
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    if (currentContent) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [currentContent]);

  useEffect(() => {
    async function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight ===
        document.documentElement.scrollHeight
      ) {
        if (flag) {
          const lastId = posts[posts.length - 1] && posts[posts.length - 1].id;
          const res = await onLoadPost(lastId);
          setPosts([...posts, ...res.data]);
          if (res.data.length !== 9) {
            setFlag(false);
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [flag, posts]);

  useEffect(() => {
    if (post) {
      setPosts(post);
      if (post.length === 9) {
        setFlag(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  return (
    <div className={styles.container} style={{ height: "95%" }}>
      <Contents />
      {currentContent && <Viewer />}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await onLoadPost(0);
  const post = res.data;

  return { props: { post } };
}

export default Post;
