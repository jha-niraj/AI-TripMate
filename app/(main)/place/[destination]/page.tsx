import PlaceDetailsPage from "../_components/placedetailspage";

export default async function PlacePage({ params }: { params: Promise<{ destination: string }> }) {
	const { destination } = await params;

	return (
		<section className="w-full">
			<PlaceDetailsPage destination={destination} />
		</section>
	)
}