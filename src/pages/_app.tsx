import type { AppProps } from "next/app";
import VLibras from "vlibras-nextjs";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} /> <VLibras forceOnload />
    </>
  );
}

export default MyApp;
