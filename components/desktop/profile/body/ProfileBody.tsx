import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInput } from "../../../../hooks/useInput";
import {
  onGetUser,
  onUserImgUpload,
  onUserUpdate,
} from "../../../../service/user";
import useUser from "../../../../store/user";
import ProfileInput from "../input/ProfileInput";
import styles from "./ProfileBody.module.scss";

const ProfileBody = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const imgRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const id = useInput(user!.userid);
  const nickname = useInput(user!.nickname);
  const phone = useInput(user!.phone);
  const email = useInput(user!.email);

  useEffect(() => {
    if (user) {
      if (user.userImg) {
        setImgUrl(user.userImg);
      }
    }
  }, [user]);

  const onClickImageUpload = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }, [imgRef]);

  const changeImages = async (e: any) => {
    const img = e.target.files[0];
    const imageFormData = new FormData();
    imageFormData.append("image", img);
    const result = await onUserImgUpload(imageFormData);
    if (result) {
      setImgUrl(result);
    }
  };

  const onUpdateUser = async () => {
    if (textRef.current && user) {
      let data: any = {
        id: user.id,
        intro: textRef.current.value,
        nickname: nickname.value,
        phone: phone.value,
        email: email.value,
      };
      if (imgUrl !== "") {
        data = { ...data, userImg: imgUrl };
      }
      await onUserUpdate(data).then(async () => {
        const result = await onGetUser();
        if (result) {
          setUser(result);
          router.push("/post");
        } else {
          alert("유저 정보를 업데이트하는데 실패했습니다");
        }
      });
    }
  };

  return (
    <div className={styles.profileBody}>
      <div className={styles.imgProfile}>
        <img
          src={
            imgUrl !== ""
              ? `${process.env.NEXT_PUBLIC_API_URL}/${imgUrl}`
              : "/profileImg.png"
          }
          className={styles.profileImage}
          alt="profileImg"
          onClick={onClickImageUpload}
        ></img>
        <input
          type="file"
          name="image"
          hidden
          ref={imgRef}
          onChange={changeImages}
        />
      </div>
      <div className={styles.texts}>
        <ProfileInput type="ID" {...id} />
        <ProfileInput type="nickname" {...nickname} />
        <ProfileInput type="phone" {...phone} />
        <ProfileInput type="email" {...email} />
      </div>
      <div className={styles.introContainer}>
        <label className={styles.introLabel}>소개</label>
        <textarea
          className={styles.intro}
          cols={10}
          rows={10}
          defaultValue={user ? user.intro : ""}
          ref={textRef}
        ></textarea>
      </div>
      <div className={styles.btns}>
        <button
          className={styles.cancleBtn}
          onClick={() => {
            router.push("/post");
          }}
        >
          취소
        </button>
        <button className={styles.editBtn} onClick={onUpdateUser}>
          편집
        </button>
      </div>
    </div>
  );
};

export default ProfileBody;
