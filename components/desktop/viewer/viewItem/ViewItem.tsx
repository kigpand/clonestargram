import ViewItemBody from "./body/ViewItemBody";
import ViewItemHeader from "./header/ViewItemHeader";
import styles from "./ViewItem.module.scss";

const ViewItem = () => {
  return (
    <div className={styles.viewItem}>
      <ViewItemHeader />
      <ViewItemBody />
    </div>
  );
};

export default ViewItem;
