import useContent from "../../../../store/content";
import AddComment from "../../../shared/addComment/AddComment";
import ViewItemBody from "../../../shared/viewItem/body/ViewItemBody";
import ViewItemComment from "../../../shared/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../../shared/viewItem/header/ViewItemHeader";
import styles from "./ViewItem.module.scss";

const ViewItem = () => {
  const { currentContent, setCurrentContent } = useContent();

  return (
    <div className={styles.viewItem}>
      <ViewItemHeader viewItem={currentContent} />
      <ViewItemBody viewItem={currentContent} />
      <ViewItemComment viewItem={currentContent} />
      <AddComment viewItem={currentContent} setViewItem={setCurrentContent} />
    </div>
  );
};

export default ViewItem;
