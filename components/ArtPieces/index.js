import useSWR from "swr";
import ArtPiecesPreview from "../ArtPiecesPreview";
import fetcher from "@/lib/fetcher";

const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPieces() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (isLoading || !artPieces) return <p>Loading artworks...</p>;
  if (error) return <p>Something went wrong fetching the art.</p>;

  return (
    <ul>
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
          />
        </li>
      ))}
    </ul>
  );
}
