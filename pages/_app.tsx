import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout/Layout";
import { MOBILE_SIZE } from "../utils/common";
import useData from "../store/data";
import { useEffect } from "react";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  const { setMobile } = useData();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= MOBILE_SIZE) {
        setMobile(true);
      } else {
        console.log("test");
        setMobile(false);
      }
    });
  }, []);

  return <Layout component={<Component {...pageProps} />} />;
}

export default MyApp;
