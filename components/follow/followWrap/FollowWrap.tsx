import { IUser } from "../../../interface/IUser";
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
      {list.map((data: IUser, i: number) => (
        <FollowList follow={data} key={i} />
      ))}
    </div>
  );
};

export default FollowWrap;
