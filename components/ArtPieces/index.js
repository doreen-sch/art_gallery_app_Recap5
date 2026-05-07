import useSWR from "swr";
import ArtPiecesPreview from "../ArtPiecesPreview";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

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
        <li key={piece.id}>
          <ArtPiecesPreview
            image={piece.image}
            title={piece.title}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
