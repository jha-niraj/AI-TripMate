import { Chatbot } from "@/components/chatbot"
import { FullItineraryPlanner } from "./_components/fullitenaryplanner"

export default function ItineraryPlannerPage() {
    return (
        <div className="w-full min-h-screen py-20">
            <main className="max-w-7xl mx-auto">
                <div className="relative h-[20vh] min-h-[150px] w-full overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/placeholder.svg?height=600&width=1600')",
                            filter: "brightness(0.7)",
                        }}
                    />
                    <div className="relative h-full flex items-center justify-center text-center px-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Plan Your Perfect Itinerary</h1>
                            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                                Create, customize, and share your travel plans with our AI-powered itinerary planner
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-4 mx-auto">
                    <FullItineraryPlanner />
                </div>
            </main>
            <Chatbot />
        </div>
    )
}