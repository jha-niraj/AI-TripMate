import { Chatbot } from "@/components/chatbot"
import { PlaceBanner } from "../_components/placebanner"
import { GoogleMap } from "../_components/googlemaps"
import { SmartSuggestions } from "../_components/smartsuggestions"
import { ItineraryPlanner } from "../_components/itenary-planner"
import { InsiderTips } from "../_components/insidertips"

export default function DestinationDetails({ destination } : { destination: string }) {
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