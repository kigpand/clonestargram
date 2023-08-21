"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import ProfileInput from "../input/ProfileInput";
import styles from "./ProfileBody.module.scss";
import { useInput } from "../../../hooks/useInput";
import Loading from "../../shared/loading/Loading";
import useUserInfo from "../../../hooks/useUserInfo";

const ProfileBody = () => {
  const { user, onFetchUser } = useUserInfo();
  const router = useRouter();
  const imgRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<File | null>(null);
  const [img, setImg] = useState<string>("");
  const id = useInput(user!.id);
  const nickname = useInput(user!.name);
  const phone = useInput(user!.phone);
  const email = useInput(user!.email);

  useEffect(() => {
    if (user && user.image) {
      setImg(user.image);
    }
  }, [user]);

  const onClickImageUpload = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }, [imgRef]);

  const changeImages = async (e: any) => {
    setImgUrl(e.target.files[0]);
  };

  const onUpdateUser = async () => {
    if (textRef.current && user) {
      setLoading(true);
      const formData = new FormData();
      if (imgUrl) formData.append("image", imgUrl);

      formData.append("id", user.id);
      formData.append("nickname", nickname.value);
      formData.append("email", email.value);
      formData.append("phone", phone.value);
      formData.append("intro", textRef.current.value);

      fetch("/api/user/", { method: "PATCH", body: formData })
        .then(async () => {
          await onFetchUser();
          setLoading(false);
          router.push("/post");
        })
        .catch(() => alert("프로필 업데이트에 실패하였습니다"));
    }
  };

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.substring(0, 11);
    } else {
      phone.onChange(e);
    }
  };

  return (
    <div className={styles.profileBody}>
      {loading && <Loading />}
      <div className={styles.imgProfile}>
        <img
          src={
            imgUrl
              ? `${URL.createObjectURL(imgUrl)}`
              : img !== ""
              ? img
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
        <ProfileInput
          type="phone"
          value={phone.value}
          onChange={onPhoneChange}
        />
        <ProfileInput type="email" {...email} />
      </div>
      <div className={styles.introContainer}>
        <label className={styles.introLabel}>소개</label>
        <textarea
          className={styles.intro}
          cols={10}
          rows={10}
          defaultValue={user!.intro}
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
