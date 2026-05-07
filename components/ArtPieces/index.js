import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
