"use client";

import { IUser } from "../../../interface/IUser";
import FollowList from "./followList/FollowList";
import styles from "./FollowWrap.module.scss";
import { onIdCheck } from "../../../service/user";
import useSWR, { useSWRConfig } from "swr";
import Loading from "../../shared/loading/Loading";

interface IFollowWrap {
  list: any;
  title: string;
}

const FollowWrap = ({ list, title }: IFollowWrap) => {
  const { data } = useSWR(`followUser${title}`, getFollowUser, {
    suspense: true,
  });

  async function getFollowUser() {
    if (!list || list.length === 0) return;
    const result = await Promise.all(
      list.map((user: any) => onIdCheck(user._ref))
    );
    return result;
  }

  return (
    <div className={styles.followWrap}>
      <div className={styles.title}>{title}</div>
      {data?.map((data: IUser, i: number) => (
        <FollowList follow={data} key={i} />
      ))}
    </div>
  );
};

export default FollowWrap;
