import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import { SWRConfig } from "swr";
import { useState, useEffect } from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize state from localStorage
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // Handle Hydration and loading saved favorites
  useEffect(() => {
    const saved = localStorage.getItem("art-pieces-info");
    if (saved) {
      setArtPiecesInfo(JSON.parse(saved));
    }
    setIsMounted(true);
  }, []);

  // Save to localStorage whenever artPiecesInfo changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("art-pieces-info", JSON.stringify(artPiecesInfo));
    }
  }, [artPiecesInfo, isMounted]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((info) => {
      const piece = info.find((p) => p.slug === slug);
      if (piece) {
        return info.map((p) =>
          p.slug === slug ? { ...p, isFavorite: !p.isFavorite } : p
        );
      }
      return [...info, { slug, isFavorite: true }];
    });
  }
  //To prevent server-side rendering errors
  if (!isMounted) return null;

  function handleAddComment(slug, newComment) {
  const date = new Date().toLocaleDateString("de-DE"); // Matches your sketch (01.01.2020)
  const time = new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

  setArtPiecesInfo((prevInfo) => {
    const piece = prevInfo.find((p) => p.slug === slug);

    if (piece) {
      // Piece exists, add new comment to its existing comments array
      return prevInfo.map((p) =>
        p.slug === slug
          ? { ...p, comments: [...(p.comments || []), { text: newComment, date, time }] }
          : p
      );
    }
       // Piece doesn't exist yet, create it with the first comment
    return [...prevInfo, { slug, isFavorite: false, comments: [{ text: newComment, date, time }] }];
  });
}
  return (
    <>
      {" "}
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={artPieces}
          /* artPieces={artPieces}   */
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
          onSubmitComment={handleAddComment}
        />
        <Navigation />
      </SWRConfig>
    </>
  );
}
