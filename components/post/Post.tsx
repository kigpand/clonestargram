"use client";

import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowHook";
import { MOBILE_SIZE } from "../../utils/common";
import useUser from "../../store/user";
import { useRouter } from "next/navigation";
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
