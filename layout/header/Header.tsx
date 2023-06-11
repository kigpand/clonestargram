"use client";

import React from "react";
import { useInput } from "../../hooks/useInput";
import useData from "../../store/data";
import usePosts from "../../store/post";
import styles from "./header.module.scss";
import HeaderItems from "./headerItem/HeaderItem";
import { IPost } from "../../interface/IPost";

const Header = () => {
  const { setHashTagPosts, post } = usePosts();
  const { setSearchTag } = useData();
  const inputData = useInput("");

  const onEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputData.value !== "") {
      const filter = post.filter((item: IPost) => {
        const tag = item.tag.split("#");
        const result = tag.find((data: string) => data === inputData.value);
        if (result) return true;
        return false;
      });
      if (filter.length > 0) {
        inputData.onClear();
        setSearchTag(inputData.value);
        setHashTagPosts(filter);
      } else {
        alert("검색 결과가 없습니다.");
      }
    }
  };

  return (
    <div className={styles.header}>
      <img src="/logo.png" className={styles.logo} alt="로고" />
      <input
        className={styles.text}
        type="text"
        placeholder="검색.."
        value={inputData.value}
        onChange={inputData.onChange}
        onKeyDown={onEnter}
      />
      <HeaderItems />
    </div>
  );
};

export default Header;
