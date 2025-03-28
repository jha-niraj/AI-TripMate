import { Chatbot } from "@/components/chatbot"
import { PlaceBanner } from "@/components/place-banner"
import { SmartSuggestions } from "@/components/smart-suggestions"
import { GoogleMap } from "@/components/google-map"
import { InsiderTips } from "@/components/insider-tips"
import { ItineraryPlanner } from "@/components/itinerary-planner"

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SmartSuggestions destination={formattedDestination} />
                        <div className="space-y-8">
                            <GoogleMap destination={formattedDestination} />
                            <ItineraryPlanner destination={formattedDestination} />
                        </div>
                    </div>
                    <InsiderTips destination={formattedDestination} />
                </div>
            </main>
            <Chatbot destination={formattedDestination} />
        </div>
    )
}