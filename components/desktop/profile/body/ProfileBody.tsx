import { useRef, useState } from "react";
import useUser from "../../../../store/user";
import ProfileInput from "../input/ProfileInput";
import styles from "./ProfileBody.module.scss";

const ProfileBody = () => {
  const { user } = useUser();
  const imgRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<any>({
    ID: "",
    NICK: "",
    PHONE: "",
    EMAIL: "",
  });

  const onProfileChange = (title: string, input: string) => {
    const data = { ...profile };
    data[title] = input;
    setProfile(data);
  };

  return (
    <div className={styles.profileBody}>
      <div className={styles.imgText}>
        <div className={styles.imgProfile}>
          <img
            // src="/profileImg.png"
            src={
              user && user.userImg
                ? `${process.env.NEXT_PUBLIC_API_URL}/${user.userImg}`
                : "/profileImg.png"
            }
            className={styles.profileImage}
            alt="profileImg"
          ></img>
          <input type="file" name="image" hidden ref={imgRef} />
        </div>
        <div className={styles.texts}>
          <ProfileInput
            type="ID"
            value={user ? user.userid : ""}
            onProfileChange={onProfileChange}
          />
          <ProfileInput
            type="NICK"
            value={user ? user.nickname : ""}
            onProfileChange={onProfileChange}
          />
          <ProfileInput
            type="PHONE"
            value={user ? user.phone : ""}
            onProfileChange={onProfileChange}
          />
          <ProfileInput
            type="EMAIL"
            value={user ? user.email : ""}
            onProfileChange={onProfileChange}
          />
        </div>
      </div>
      <div className={styles.introContainer}>
        <label className={styles.introLabel}>소개</label>
        <textarea
          className={styles.intro}
          cols={10}
          rows={10}
          defaultValue={user ? user.intro : ""}
        ></textarea>
      </div>
      <button className={styles.editBtn}>편집</button>
    </div>
  );
};

export default ProfileBody;
