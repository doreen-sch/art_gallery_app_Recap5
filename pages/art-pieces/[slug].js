import { useRouter } from "next/router";
import useSWR from "swr";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import fetcher from "@/lib/fetcher";

const URL = "https://example-apis.vercel.app/api/art";

export default function DetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (!router.isReady || isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading art pieces.</div>;

  const selectedArtPiece = data?.find((piece) => piece.slug === slug);

  if (!selectedArtPiece) {
    return (
      <div>
        <h1>Art piece not found</h1>
        <p>Gallery item not found.</p>
      </div>
    );
  }

  return <ArtPieceDetails selectedArtPiece={selectedArtPiece} />;
}