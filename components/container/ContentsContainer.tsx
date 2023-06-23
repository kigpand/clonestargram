"use client";

import { useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowHook";
import { MOBILE_SIZE } from "../../utils/common";
import Contents from "../desktop/contents/Contents";
import MobileContents from "../mobile/MobileContents/MobileContents";
import useUser from "../../store/user";
import { useRouter } from "next/navigation";

const ContentsContainer = () => {
  const windowSize = useWindowSize();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  }, [user]);

  return (
    <section style={{ width: "100%" }}>
      {windowSize < MOBILE_SIZE ? <MobileContents /> : <Contents />}
    </section>
  );
};

export default ContentsContainer;
