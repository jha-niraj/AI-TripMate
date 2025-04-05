import { Chatbot } from "@/components/chatbot"
import { CameraButton } from "../../place/_components/camerabutton"
import { HotelsList } from "../_components/hotellist"

export default function HotelPlaceDetails({ destination }: { destination: string }) {
    const formattedDestination = destination.charAt(0).toUpperCase() + destination.slice(1)

    return (
        <div className="min-h-screen bg-white">
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
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hotels in {formattedDestination}</h1>
                            <p className="text-xl text-white max-w-3xl mx-auto">
                                Find your perfect accommodation for an unforgettable stay
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <HotelsList destination={formattedDestination} />
                </div>
            </main>
            <Chatbot destination={formattedDestination} />
            <CameraButton />
        </div>
    )
}