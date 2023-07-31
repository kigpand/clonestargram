import { useEffect, useState } from "react";
import styles from "./HeaderFollow.module.scss";
import { IPost } from "../../../../../interface/IPost";
import useUserInfo from "../../../../../hooks/useUserInfo";

interface IHeaderFollow {
  currentContent: IPost;
  changeLoading: (flag: boolean) => void;
}

const HeaderFollow = ({ currentContent, changeLoading }: IHeaderFollow) => {
  const { user, onFetchUser } = useUserInfo();
  const [isFollow, setIsFollow] = useState<boolean | null>(null);

  useEffect(() => {
    if (!currentContent) return;
    const result = user?.followings?.find(
      (item: any) => item._ref === currentContent.username
    );
    if (result) {
      setIsFollow(true);
    } else {
      setIsFollow(false);
    }
  }, [user, currentContent]);

  const onFollowBtn = async (flag: boolean) => {
    if (!user) return alert("오류가 발생했습니다");
    changeLoading(true);
    await fetch("/api/follow", {
      method: "PUT",
      body: JSON.stringify({
        other: currentContent.id,
        isFollow: flag,
      }),
    })
      .then(async () => {
        await onFetchUser().then(() => changeLoading(false));
      })
      .catch((e: any) => console.error(e));
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
