import useContent from "../../../../store/content";
import AddComment from "../../../shared/addComment/AddComment";
import ViewItemBody from "../../../shared/viewItem/body/ViewItemBody";
import ViewItemComment from "../../../shared/viewItem/comment/ViewItemComment";
import ViewItemHeader from "../../../shared/viewItem/header/ViewItemHeader";
import styles from "./ViewItem.module.scss";

const ViewItem = () => {
  return (
    <div className={styles.viewItem}>
      <ViewItemHeader />
      <ViewItemBody />
      <ViewItemComment />
      <AddComment />
    </div>
  );
};

export default ViewItem;
