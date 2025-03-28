import DestinationDetails from "../_components/destinationdetails";

export default async function PlacePage({ params }: { params: Promise<{ destination: string }> }) {
    const { destination } = await params;

    return (
        <div className="min-h-screen bg-white">
            <DestinationDetails destination={destination} />
        </div>
    )
}