import Image from "next/image";

export default function ArtPiecesPreview({ image, title, artist }) {
  console.log(title);
  return (
    <figure>
      <Image
        src={image}
        alt={`Artwork titled ${title} by ${artist}`}
        width={500}
        height={500}
      />
      <figcaption>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
      </figcaption>
    </figure>
  );
}
