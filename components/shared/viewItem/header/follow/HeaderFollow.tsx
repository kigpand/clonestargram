import { useEffect, useState } from "react";
import styles from "./HeaderFollow.module.scss";
import { IPost } from "../../../../../interface/IPost";
import useUserInfo from "../../../../../hooks/useUserInfo";

interface IHeaderFollow {
  currentContent: IPost;
}

const HeaderFollow = ({ currentContent }: IHeaderFollow) => {
  const { user, onFetchUser } = useUserInfo();
  const [isFollow, setIsFollow] = useState<boolean | null>(null);

  // 현재 게시글 변경됬을때 팔로우 btn state 변경
  useEffect(() => {
    if (!currentContent) return;
    onChangeFollowing(user);
  }, [currentContent]);

  /**
   * follow btn click event
   * flag: follow state. true = follow상태, false = unfollow상태
   * */
  const onFollowBtn = async (flag: boolean) => {
    if (!user) return alert("오류가 발생했습니다");
    await fetch("/api/follow", {
      method: "PUT",
      body: JSON.stringify({
        other: currentContent.id,
        isFollow: flag,
      }),
    })
      .then(async () => {
        await onFetchUser().then((newUser) => {
          onChangeFollowing(newUser);
        });
      })
      .catch((e: any) => console.error(e));
  };

  // user following 확인하여 팔로우, 언팔로우 구분하는 함수
  const onChangeFollowing = (user: any) => {
    const result = user?.following?.find(
      (item: any) => item._ref === currentContent.username
    );
    if (result) {
      setIsFollow(true);
    } else {
      setIsFollow(false);
    }
  };

  return (
    <div className={styles.headerFollow}>
      {isFollow !== null &&
        (!isFollow ? (
          <div className={styles.followBtn} onClick={() => onFollowBtn(true)}>
            팔로우
          </div>
        ) : (
          <div
            className={styles.unfollowBtn}
            onClick={() => onFollowBtn(false)}
          >
            언팔로우
          </div>
        ))}
    </div>
  );
};

export default HeaderFollow;
