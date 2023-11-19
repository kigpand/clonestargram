import type { NextPage } from "next";
import Header from "../layout/header/Header";
import PostComponent from "../components/post/PostComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <PostComponent />
    </div>
  );
};

export default Home;
