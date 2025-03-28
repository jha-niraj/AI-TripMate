import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { FullItineraryPlanner } from "@/components/full-itinerary-planner"

export default function ItineraryPlannerPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/placeholder.svg?height=600&width=1600')",
                            filter: "brightness(0.7)",
                        }}
                    />
                    <div className="relative h-full flex items-center justify-center text-center px-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Plan Your Perfect Itinerary</h1>
                            <p className="text-xl text-white max-w-3xl mx-auto">
                                Create, customize, and share your travel plans with our AI-powered itinerary planner
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <FullItineraryPlanner />
                </div>
            </main>
            <Chatbot />
        </div>
    )
}