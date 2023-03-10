import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { onSearchHashTag } from "../../service/post";
import useData from "../../store/data";
import usePosts from "../../store/post";
import styles from "./header.module.scss";
import HeaderItems from "./headerItem/HeaderItem";

const Header = () => {
  const { setHashTagPosts } = usePosts();
  const { setSearchTag } = useData();
  const inputData = useInput("");
  const router = useRouter();

  const onEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputData.value !== "") {
      const result = await onSearchHashTag(inputData.value);
      if (result.data && result.data.length > 0) {
        setHashTagPosts(result.data);
        setSearchTag(inputData.value);
        router.push("/hashTag");
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
        onChange={inputData.onChange}
        onKeyDown={onEnter}
      />
      <HeaderItems />
    </div>
  );
};

export default Header;
