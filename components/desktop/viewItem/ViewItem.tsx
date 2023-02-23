import React, { useEffect, useRef, useState } from "react";
import styles from "./viewItem.module.css";

const Viewer = ({ viewPost }: any) => {
  const [comment, setComment] = useState();
  const textarea = useRef<HTMLTextAreaElement>(null);

  const commentText = (e: any) => {
    setComment(e.target.value);
  };

  return (
    <div className={styles.viewPost}>
      <div className={styles.back}></div>
      <div className={styles.front}>
        <img
          src={
            viewPost.Images.length > 0 ? viewPost.Images[0].src : "/noimg.png"
          }
          className={styles.contentImg}
          alt="view"
        />
        <div className={styles.contentTexts}>
          <div className={styles.title}>
            <img
              src={
                viewPost.User.userImg
                  ? viewPost.User.userImg
                  : "/profileImg.png"
              }
              className={styles.titleImg}
              alt="profile"
            ></img>
            <div className={styles.userNickname}>
              {viewPost.User.nickname}님의 게시글
            </div>
            <button>삭제</button>
          </div>
          <div className={styles.main}>
            <div className={styles.mainTitle}>
              <img
                src={
                  viewPost.User.userImg
                    ? viewPost.User.userImg
                    : "/profileImg.png"
                }
                className={styles.titleImg}
                alt="profile"
              ></img>
              <div className={styles.userNickname}>
                {viewPost.User.nickname}
              </div>
            </div>
            <div className={styles.userContent}>{viewPost.content}</div>
          </div>
          {viewPost.Comments && <div className={styles.comments}></div>}
          <div className={styles.addComment}>
            <textarea
              ref={textarea}
              className={styles.addCommentText}
              onChange={commentText}
            />
            <button className={styles.addCommentBtn}>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
