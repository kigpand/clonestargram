"use client";

import { useEffect, useState } from "react";
import MobileContentItem from "./MobileContentItem/MobileContentItem";
import usePosts from "../../../store/post";
import { IPost } from "../../../interface/IPost";
import HashTagContents from "../../hashTagContents/HashTagContents";
import useFilteredPost from "../../../hooks/useFilteredPost";

const MobilePosts = () => {
  const { hashTagPosts } = usePosts();
  const [mobilePost, setMobilePost] = useState<IPost[]>([]);
  const [scroll, setScroll] = useState<number>(0);
  const { post } = useFilteredPost();

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

  // page load시 초기 post setting
  useEffect(() => {
    if (post.length > 3) {
      setMobilePost([post[0], post[1], post[2]]);
    } else {
      setMobilePost([...post]);
    }
  }, [post]);

  useEffect(() => {
    if (
      post.length - 1 === mobilePost.length ||
      post.length === 0 ||
      scroll === 0
    ) {
      return;
    }
    setMobilePost([...mobilePost, post[mobilePost.length + 1]]);
  }, [scroll]);

  return (
    <div style={{ width: "100%" }}>
      {hashTagPosts.length > 0 ? (
        <HashTagContents isMobile={true} />
      ) : (
        <div>
          {mobilePost.map((item: IPost, i: number) => {
            return <MobileContentItem post={item} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MobilePosts;
