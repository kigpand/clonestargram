import { useEffect, useState } from "react";
import { IFollow } from "../../../../../interface/IFollow";
import useUser from "../../../../../store/user";
import styles from "./HeaderFollow.module.scss";
import { IPost } from "../../../../../interface/IPost";

interface IHeaderFollow {
  currentContent: IPost;
}

const HeaderFollow = ({ currentContent }: IHeaderFollow) => {
  const { user } = useUser();
  const [isFollow, setIsFollow] = useState<boolean | null>(null);

  useEffect(() => {
    console.log(user);
    const result = user?.followings.find(
      (item: IFollow) => item.id === currentContent.id
    );
    if (result) {
      setIsFollow(true);
    } else {
      setIsFollow(false);
    }
  }, [user]);

  const onFollowBtn = async () => {
    if (!user) return alert("오류가 발생했습니다");
    // await onAddFollow(viewItem.id).then(async () => {
    //   const result = await onGetUser();
    //   if (result) {
    //     setUser(result);
    //   } else {
    //     alert("유저 정보를 업데이트하는데 실패했습니다");
    //   }
    // });
  };

  const unFollowBtn = async () => {
    if (!user) return alert("오류가 발생했습니다");
    // await onDeleteFollow(viewItem.UserId).then(async () => {
    //   const result = await onGetUser();
    //   if (result) {
    //     setUser(result);
    //   } else {
    //     alert("유저 정보를 업데이트하는데 실패했습니다");
    //   }
    // });
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
