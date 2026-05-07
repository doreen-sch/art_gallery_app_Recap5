import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const response = await fetch(url);
  // console.log("Raw responseponse:", response);
  const data = await response.json();

  console.log("responseponse data:", data);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const { data: pieces } = useSWR(URL, fetcher);
  console.log("Text:", pieces);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
