import useFilteredPost from "../../hooks/useFilteredPost";
import { useWindowSize } from "../../hooks/useWindowHook";
import { MOBILE_SIZE } from "../../utils/common";
import Posts from "./desktop/Posts";
import MobilePosts from "./mobile/MobilePosts";

const PostComponent = () => {
  const windowSize = useWindowSize();
  const { post } = useFilteredPost();

  return (
    <section style={{ width: "100%" }}>
      {windowSize < MOBILE_SIZE ? (
        <MobilePosts post={post} />
      ) : (
        <Posts post={post} />
      )}
    </section>
  );
};

export default PostComponent;
