import { useRouter } from "next/router";
import useSWR from "swr";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import fetcher from "@/lib/fetcher";

const URL = "https://example-apis.vercel.app/api/art";
// Accept artPiecesInfo and onSubmitComment as props
export default function DetailsPage({artPiecesInfo, onSubmitComment} ) {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (!router.isReady || isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading art pieces.</div>;

  const selectedArtPiece = data?.find((piece) => piece.slug === slug);

    // to find the extra info (like comments) for this specific piece using the slug
  const pieceInfo = artPiecesInfo.find((p) => p.slug === slug);
  const comments = pieceInfo?.comments || [];

  if (!selectedArtPiece) {
    return (
      <div>
        <h1>Art piece not found</h1>
        <p>Gallery item not found.</p>
      </div>
    );
  }

  return <ArtPieceDetails 
      selectedArtPiece={selectedArtPiece}
      // Pass the comments and the submit function down to the details view
      comments={comments}
      onSubmitComment={onSubmitComment} />;
}