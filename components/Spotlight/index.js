import Image from "next/image";

function getRandomArtPiece(artworks) {
  if (!artworks || artworks.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * artworks.length);
  return artworks[randomIndex];
}

export default function Spotlight({ pieces }) {
  console.log("kunst", pieces);
  const spotlightPiece = getRandomArtPiece(pieces);

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
      <p>{spotlightPiece.artist}</p>
    </div>
  );
}
