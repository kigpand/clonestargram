"use client";

import { useEffect, useState } from "react";
import { usePost } from "../../../hooks/usePost";
import { IPost } from "../../../interface/IPost";
import usePosts from "../../../store/post";
import ContentItem from "./item/ContentItem";
import styles from "./MobileContents.module.scss";
import HashTagContents from "../../hashTagContents/HashTagContents";

const MobileContents = () => {
  const { posts, isLoading, error } = usePost();
  const { post, hashTagPosts, setHashTagPosts, setPost } = usePosts();
  const [arr, setArr] = useState<IPost[]>([]);
  const [scroll, setScroll] = useState<number>(0);

  const onScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 50
    ) {
      setScroll(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (posts) {
      const result = posts.sort((a: IPost, b: IPost) => {
        if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
          return -1;
        }
        return 1;
      });
      setPost(result);
    }

    return () => {
      setHashTagPosts([]);
    };
  }, [posts]);

  useEffect(() => {
    if (post.length > 3) {
      setArr([post[0], post[1], post[2]]);
    } else {
      setArr([...post]);
    }
  }, [post]);

  useEffect(() => {
    if (post.length - 1 === arr.length || post.length === 0 || scroll === 0) {
      return;
    }
    setArr([...arr, post[arr.length + 1]]);
  }, [scroll]);

  return (
    <div className={styles.mobileContents}>
      {hashTagPosts.length > 0 ? (
        <HashTagContents isMobile={true} />
      ) : (
        <div className={styles.lists}>
          {arr.map((item: IPost, i: number) => {
            return <ContentItem post={item} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MobileContents;
