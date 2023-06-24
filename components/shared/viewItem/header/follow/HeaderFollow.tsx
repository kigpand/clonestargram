import { useEffect, useState } from "react";
import useUser from "../../../../../store/user";
import styles from "./HeaderFollow.module.scss";
import { IPost } from "../../../../../interface/IPost";
import { onIdCheck } from "../../../../../service/user";

interface IHeaderFollow {
  currentContent: IPost;
  changeLoading: (flag: boolean) => void;
}

const HeaderFollow = ({ currentContent, changeLoading }: IHeaderFollow) => {
  const { user, setUser } = useUser();
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
  }, [user]);

  const onFollowBtn = async (flag: boolean) => {
    if (!user) return alert("오류가 발생했습니다");
    changeLoading(true);
    await fetch("/api/follow", {
      method: "PUT",
      body: JSON.stringify({
        id: user.id,
        other: currentContent.id,
        isFollow: flag,
      }),
    })
      .then(async () => {
        const newUser = await onIdCheck(user.id);
        setUser({
          id: newUser.username,
          name: newUser.name,
          phone: newUser.phone,
          email: newUser.email,
          image: newUser.image || null,
          intro: newUser.intro || "",
          followings: newUser.following,
          followers: newUser.followers,
        });
        changeLoading(false);
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
