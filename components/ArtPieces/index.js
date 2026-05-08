import styled from "styled-components";
//import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import ArtPiecesPreview from "../ArtPiecesPreview";
import Spotlight from "../Spotlight";

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
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading || !artPieces) return <p>Loading artworks...</p>;
  if (error) return <p>Something went wrong fetching the art.</p>;

  return (
    <StyledArtList>
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
      <Spotlight artPieces={artPieces} />
    </StyledArtList>
  );
}

const StyledArtList = styled.ul`
  list-style: none;
`;
