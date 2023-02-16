import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { onLoadPost } from "../../../load/post";
import styles from "./Contents.module.scss";
import ContentsItem from "./contentsItem/ContentsItem";

const Contents = ({
  post,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [postItem, setPostItem] = useState<any>(null);

  useEffect(() => {
    if (post) {
      setPostItem(postItem);
    }
  }, [post]);

  return (
    <div className={styles.contents}>
      <div className={styles.lists}>
        {postItem.map((item: any, i: number) => {
          return <ContentsItem post={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await onLoadPost();
  const post = res.data;

  return { props: { post } };
}

export default Contents;
