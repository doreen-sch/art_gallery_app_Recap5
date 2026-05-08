import styled from "styled-components";
//import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import ArtPiecesPreview from "../ArtPiecesPreview";
import Spotlight from "../Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
 /*  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading || !artPieces) return <p>Loading artworks...</p>;
  if (error) return <p>Something went wrong fetching the art.</p>; */

    if (!pieces) return <p>Loading artworks...</p>;

  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={artPiecesInfo?.find((info) => info.slug === piece.slug)?.isFavorite}
            onToggleFavorite={() => onToggleFavorite(piece.slug)}
          />
        </li>
      ))}
      <Spotlight artPieces={artPieces} />
    </StyledArtList>
</ul>
  );

}

const StyledArtList = styled.ul`
  list-style: none;
`;
