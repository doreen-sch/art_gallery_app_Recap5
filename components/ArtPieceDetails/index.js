import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ selectedArtPiece }) {
  return (
   
    <article>
         <nav>
        <Link href="/"> {/* just navigate to the root or homepage */}
          <button type="button">← Back to List</button>
        </Link>
      </nav>
      <figure>
        <Image
          src={selectedArtPiece.imageSource}
          alt={`Artwork titled ${selectedArtPiece.name} by ${selectedArtPiece.artist}`}
          width={800}
          height={600}
        />
        <figcaption>
          <h1>{selectedArtPiece.name}</h1>
          <p>Artist: {selectedArtPiece.artist}</p>
        </figcaption>
      </figure>

      <ul>
        <li>
          <strong>Year:</strong> {selectedArtPiece.year}
        </li>
        <li>
          <strong>Genre:</strong> {selectedArtPiece.genre}
        </li>
       
      </ul>
    </article>
  );
}