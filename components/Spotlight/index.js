import { useEffect, useState } from "react";
import ArtPiecesPreview from "../ArtPiecesPreview";

function getRandomArtPiece(artworks) {
  if (!artworks || artworks.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * artworks.length);
  return artworks[randomIndex];
}

export default function Spotlight({ artPieces }) {
  // console.log("art piece array", artPieces);
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    const randomArtPiece = getRandomArtPiece(artPieces);
    //  console.log("one random art piece", randomArtPiece);
    setSpotlightPiece(randomArtPiece);
  }, [artPieces]);

  if (!spotlightPiece) return <p>Loading ...</p>;

  return (
    <div>
      <p>{spotlightPiece.name}</p>
      <ArtPiecesPreview
        image={spotlightPiece.imageSource}
        title={spotlightPiece.name}
        artist={spotlightPiece.artist}
      />
    </div>
  );
}
