import FollowList from "./followList/FollowList";
import styles from "./FollowWrap.module.scss";

interface IFollowWrap {
  list: any;
  title: string;
}

const FollowWrap = ({ list, title }: IFollowWrap) => {
  return (
    <div className={styles.followWrap}>
      <div className={styles.title}>{title}</div>
      {list.map((data: string) => (
        <FollowList key={data} />
      ))}
    </div>
  );
};

export default FollowWrap;
