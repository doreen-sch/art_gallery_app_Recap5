import GlobalStyle from "../styles";
import { SWRConfig, fetcher } from "swr";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
        <Navigation />
      </SWRConfig>
    </>
  );
}
