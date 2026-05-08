import GlobalStyle from "../styles";
import { SWRConfig, fetcher } from "swr";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
