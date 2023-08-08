"use client";

import dynamic from "next/dynamic";
import Loading from "../shared/loading/Loading";

const PostComponent = dynamic(() => import("./PostComponent"), {
  loading: () => <Loading />,
});

const Post = () => {
  return <PostComponent />;
};

export default Post;
