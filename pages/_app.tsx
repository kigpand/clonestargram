import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout/Layout";
import { MOBILE_SIZE } from "../utils/common";
import useData from "../store/data";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { setMobile } = useData();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= MOBILE_SIZE) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  return <Layout component={<Component {...pageProps} />} />;
}

export default MyApp;
