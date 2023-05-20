import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout/Layout";
import SWRConfigContext from "../context/SWRContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfigContext>
      <Layout component={<Component {...pageProps} />} />
    </SWRConfigContext>
  );
}

export default MyApp;
