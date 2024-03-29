"use client";

import useFilteredPost from "../../hooks/useFilteredPost";
import { useWindowSize } from "../../hooks/useWindowHook";
import usePosts from "../../store/post";
import { MOBILE_SIZE } from "../../utils/common";
import HashTagPosts from "../hashTagPosts/HashTagPosts";
import Posts from "./desktop/Posts";
import MobilePosts from "./mobile/MobilePosts";

const PostComponent = () => {
  const windowSize = useWindowSize();
  const { hashTagPosts } = usePosts();
  const { post, isLoading } = useFilteredPost();

  if (!windowSize) return <></>;

  return (
    <section style={{ width: "100%" }}>
      {hashTagPosts.length > 0 ? (
        <HashTagPosts isMobile={windowSize < MOBILE_SIZE ? true : false} />
      ) : windowSize < MOBILE_SIZE ? (
        <MobilePosts post={post} isLoading={isLoading} />
      ) : (
        <Posts post={post} />
      )}
    </section>
  );
};

export default PostComponent;
