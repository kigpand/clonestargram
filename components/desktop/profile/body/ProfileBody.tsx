import { useRef, useState } from "react";
import ProfileInput from "../input/ProfileInput";
import styles from "./ProfileBody.module.scss";

const inputItem = ["ID", "NICK", "PHONE", "EMAIL"];

const ProfileBody = () => {
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
            src="/profileImg.png"
            className={styles.profileImage}
            alt="profileImg"
          ></img>
          <input type="file" name="image" hidden ref={imgRef} />
        </div>
        <div className={styles.texts}>
          {inputItem.map((item: string, i: number) => {
            return (
              <ProfileInput
                type={item}
                onProfileChange={onProfileChange}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.introContainer}>
        <label className={styles.introLabel}>소개</label>
        <textarea
          className={styles.intro}
          cols={10}
          rows={10}
          defaultValue="test"
        ></textarea>
      </div>
      <button className={styles.editBtn}>편집</button>
    </div>
  );
};

export default ProfileBody;
