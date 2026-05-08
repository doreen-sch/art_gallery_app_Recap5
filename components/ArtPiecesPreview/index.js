import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <figure>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`Artwork titled ${title} by ${artist}`}
          width={500}
          height={500}
          priority
        />
      </Link>
      <figcaption>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
      </figcaption>
    </figure>
  );
}
