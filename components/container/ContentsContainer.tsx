"use client";

import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowHook";
import { MOBILE_SIZE } from "../../utils/common";
import Contents from "../desktop/contents/Contents";
import MobileContents from "../mobile/MobileContents/MobileContents";

const ContentsContainer = () => {
  const windowSize = useWindowSize();

  return (
    <section style={{ width: "100%" }}>
      {windowSize < MOBILE_SIZE ? <MobileContents /> : <Contents />}
    </section>
  );
};

export default ContentsContainer;
