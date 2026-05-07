import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const response = await fetch(url);
  // console.log("Raw responseponse:", response);
  // const data = await response.json();

  // console.log("responseponse data:", data);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const { data: pieces, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading || !pieces) return <p>Is Loading...</p>;
  if (error) return <p>Error: Something went wrong!</p>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} title={pieces.title} artist={pieces.artist} />
    </>
  );
}
