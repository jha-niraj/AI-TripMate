import { Chatbot } from "@/components/chatbot"
import { PlaceBanner } from "../_components/placebanner"
import { PlaceInformation } from "../_components/placeinformation"
import { SmartSuggestions } from "../_components/smartsuggestions"
import { GoogleMap } from "../_components/googlemaps"
import { ItineraryPlanner } from "../_components/itenary-planner"
import { HotelBookingSection } from "../_components/hotelbookingsection"
import { InsiderTips } from "../_components/insidertips"
import { CameraButton } from "../_components/camerabutton"

interface PlacePageProps {
	params: {
		destination: string
	}
}

export default function PlacePage({ params }: PlacePageProps) {
	const destination = params.destination
	const formattedDestination = destination.charAt(0).toUpperCase() + destination.slice(1)

	return (
		<div className="min-h-screen bg-white">
			<main>
				<PlaceBanner destination={formattedDestination} />
				<div className="container mx-auto px-4 py-8">
					<PlaceInformation destination={formattedDestination} />
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
						<SmartSuggestions destination={formattedDestination} />
						<div className="space-y-8">
							<GoogleMap destination={formattedDestination} />
							<ItineraryPlanner destination={formattedDestination} />
						</div>
					</div>
					<HotelBookingSection destination={formattedDestination} />
					<InsiderTips destination={formattedDestination} />
				</div>
			</main>
			<Chatbot destination={formattedDestination} />
			<CameraButton />
		</div>
	)
}