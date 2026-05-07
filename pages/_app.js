import GlobalStyle from "../styles";
import { SWRConfig, fetcher } from "swr";

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
      </SWRConfig>
    </>
  );
}
