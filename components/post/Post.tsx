"use client";

import { useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowHook";
import { MOBILE_SIZE } from "../../utils/common";
import useUser from "../../store/user";
import { useRouter } from "next/navigation";
import MobilePosts from "./mobile/MobilePosts";
import Posts from "./desktop/Contents";

const Post = () => {
  const windowSize = useWindowSize();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  }, [user]);

  return (
    <section style={{ width: "100%" }}>
      {windowSize < MOBILE_SIZE ? <MobilePosts /> : <Posts />}
    </section>
  );
};

export default Post;
