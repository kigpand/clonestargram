import React, { useState } from "react";
import { useInput } from "../../../hooks/useInput";
import useData from "../../../store/data";
import usePosts from "../../../store/post";
import HeaderToggle from "./headerToggle/HeaderToggle";
import styles from "./mobileHeader.module.scss";
import { IPost } from "../../../interface/IPost";

const MobileHeader = () => {
  const inputData = useInput("");
  const { setHashTagPosts, post } = usePosts();
  const { setSearchTag } = useData();
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

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
    <div className={styles.mobileHeader}>
      <input
        className={styles.text}
        type="text"
        placeholder="검색.."
        onChange={inputData.onChange}
        onKeyDown={onEnter}
      />
      <img
        src="/hamburgur.png"
        alt="토글버튼"
        className={styles.hamburger}
        onClick={onToggle}
      ></img>
      {toggle && <HeaderToggle />}
    </div>
  );
};

export default MobileHeader;
