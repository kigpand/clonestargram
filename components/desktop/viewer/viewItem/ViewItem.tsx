import ViewItemBody from "./body/ViewItemBody";
import ViewItemComment from "./comment/ViewItemComment";
import ViewItemHeader from "./header/ViewItemHeader";
import styles from "./ViewItem.module.scss";

const ViewItem = () => {
  return (
    <div className={styles.viewItem}>
      <ViewItemHeader />
      <ViewItemBody />
      <ViewItemComment />
    </div>
  );
};

export default ViewItem;
