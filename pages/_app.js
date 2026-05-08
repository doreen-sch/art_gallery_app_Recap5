import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
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

  return (
    <>
          <GlobalStyle />
        <Component {...pageProps} 
        pieces={artPieces}
         /* artPieces={artPieces}   */
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}/>
        <Navigation />
    
    </>
  );
}
