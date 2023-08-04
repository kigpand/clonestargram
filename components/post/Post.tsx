"use client";

import { useWindowSize } from "../../hooks/useWindowHook";
import { MOBILE_SIZE } from "../../utils/common";
import MobilePosts from "./mobile/MobilePosts";
import Posts from "./desktop/Posts";

const Post = () => {
  const windowSize = useWindowSize();

  return (
    <section style={{ width: "100%" }}>
      {windowSize < MOBILE_SIZE ? <MobilePosts /> : <Posts />}
    </section>
  );
};

export default Post;
