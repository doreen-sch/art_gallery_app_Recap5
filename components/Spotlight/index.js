import { useEffect, useState } from "react";
import Image from "next/image";

function getRandomArtPiece(artworks) {
  if (!artworks || artworks.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * artworks.length);
  return artworks[randomIndex];
}

export default function Spotlight({ artPieces }) {
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    const randomArtPiece = getRandomArtPiece(artPieces);

    setSpotlightPiece(randomArtPiece);
  }, [artPieces]);

  if (!spotlightPiece) return <p>Loading ...</p>;

  return (
    <div>
      <Image
        src={spotlightPiece.imageSource}
        alt={`Artwork titled ${spotlightPiece.title} by ${spotlightPiece.artist}`}
        width={500}
        height={500}
        priority
      />
      <p>{spotlightPiece.name}</p>
    </div>
  );
}
