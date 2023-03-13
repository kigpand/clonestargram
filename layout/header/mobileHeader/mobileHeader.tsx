import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import { onSearchHashTag } from "../../../service/post";
import useData from "../../../store/data";
import usePosts from "../../../store/post";
import HeaderToggle from "./headerToggle/HeaderToggle";
import styles from "./mobileHeader.module.scss";

const MobileHeader = () => {
  const inputData = useInput("");
  const { setHashTagPosts } = usePosts();
  const { setSearchTag } = useData();
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();

  const onToggle = () => {
    setToggle(!toggle);
  };

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
