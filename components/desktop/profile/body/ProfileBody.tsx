"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInput } from "../../../../hooks/useInput";
import useUser from "../../../../store/user";
import ProfileInput from "../input/ProfileInput";
import styles from "./ProfileBody.module.scss";

const ProfileBody = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const imgRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [imgUrl, setImgUrl] = useState<File | null>(null);
  const id = useInput(user!.id);
  const nickname = useInput(user!.name);
  const phone = useInput(user!.phone);
  const email = useInput(user!.email);

  useEffect(() => {
    if (user) {
      // if (user.image) {
      //   setImgUrl(user.image);
      // }
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
      const formData = new FormData();
      if (imgUrl) formData.append("image", imgUrl);

      formData.append("id", user.id);
      formData.append("nickname", nickname.value);
      formData.append("email", email.value);
      formData.append("phone", phone.value);
      formData.append("intro", textRef.current.value);

      fetch("/api/user/", { method: "PATCH", body: formData })
        .then((res) => {
          if (!res.ok) return alert("게시글 등록에 실패하였습니다");
          router.push("/");
        })
        .catch(() => alert("게시글 등록에 실패하였습니다"));
    }
  };

  return (
    <div className={styles.profileBody}>
      <div className={styles.imgProfile}>
        <img
          src={imgUrl ? `${URL.createObjectURL(imgUrl)}` : "/profileImg.png"}
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
