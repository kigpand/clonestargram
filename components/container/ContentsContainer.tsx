"use client";

import { useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowHook";
import { MOBILE_SIZE } from "../../utils/common";
import Contents from "../desktop/contents/Contents";
import MobileContents from "../mobile/MobileContents/MobileContents";

const ContentsContainer = () => {
  const windowSize = useWindowSize();
  return (
    <section>
      <MobileContents />
      {/* {windowSize < MOBILE_SIZE ? <MobileContents /> : <Contents />} */}
    </section>
  );
};

export default ContentsContainer;
