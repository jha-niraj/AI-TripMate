import HotelPlaceDetails from "../_components/hotelplacedetails";

export default async function HotelsPage({ params }: { params: Promise<{ destination: string }> }) {
	const { destination } = await params;

    return (
        <section className="w-full">
            <HotelPlaceDetails destination={destination} />
        </section>
    )
}