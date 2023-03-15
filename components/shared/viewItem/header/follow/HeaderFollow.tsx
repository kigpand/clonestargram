import { useEffect, useState } from "react";
import { IFollow } from "../../../../../interface/IFollow";
import { onAddFollow, onDeleteFollow } from "../../../../../service/follow";
import { onGetUser } from "../../../../../service/user";
import useUser from "../../../../../store/user";
import styles from "./HeaderFollow.module.scss";

interface IHeaderFollow {
  viewItem: any;
}

const HeaderFollow = ({ viewItem }: IHeaderFollow) => {
  const { user, setUser } = useUser();
  const [isFollow, setIsFollow] = useState<boolean | null>(null);

  useEffect(() => {
    const result = user?.Followings.find(
      (item: IFollow) => item.id === viewItem.UserId
    );
    if (result) {
      setIsFollow(true);
    } else {
      setIsFollow(false);
    }
  }, [user]);

  const onFollowBtn = async () => {
    if (!user) return alert("오류가 발생했습니다");
    await onAddFollow(viewItem.UserId, user.id).then(async () => {
      const result = await onGetUser(user.id);
      if (result) {
        setUser(result);
      } else {
        alert("유저 정보를 업데이트하는데 실패했습니다");
      }
    });
  };

  const unFollowBtn = async () => {
    if (!user) return alert("오류가 발생했습니다");
    await onDeleteFollow(viewItem.UserId, user.id).then(async () => {
      const result = await onGetUser(user.id);
      if (result) {
        setUser(result);
      } else {
        alert("유저 정보를 업데이트하는데 실패했습니다");
      }
    });
  };

  return (
    <div className={styles.headerFollow}>
      {isFollow !== null &&
        (!isFollow ? (
          <div className={styles.followBtn} onClick={onFollowBtn}>
            팔로우
          </div>
        ) : (
          <div className={styles.unfollowBtn} onClick={unFollowBtn}>
            언팔로우
          </div>
        ))}
    </div>
  );
};

export default HeaderFollow;
