import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface SmartSuggestionsProps {
    destination: string
}
export function SmartSuggestions({ destination }: SmartSuggestionsProps) {
    const getSuggestions = (dest: string) => {
        const suggestions: Record<string, Array<{ name: string; image: string; description: string }>> = {
            Maharashtra: [
                {
                    name: "Gateway of India",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Historic arch monument in Mumbai",
                },
                {
                    name: "Ajanta & Ellora Caves",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "UNESCO World Heritage Sites",
                },
                { name: "Lonavala", image: "/placeholder.svg?height=200&width=300", description: "Popular hill station" },
                {
                    name: "Shirdi Sai Baba Temple",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Famous spiritual destination",
                },
                {
                    name: "Mahabaleshwar",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Scenic hill station with strawberry farms",
                },
            ],
            Himachal: [
                {
                    name: "Shimla",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Former summer capital of British India",
                },
                { name: "Manali", image: "/placeholder.svg?height=200&width=300", description: "Popular mountain resort town" },
                { name: "Dharamshala", image: "/placeholder.svg?height=200&width=300", description: "Home to the Dalai Lama" },
                {
                    name: "Spiti Valley",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Cold desert mountain valley",
                },
                { name: "Kullu", image: "/placeholder.svg?height=200&width=300", description: "Valley of Gods" },
            ],
            Rajasthan: [
                { name: "Jaipur", image: "/placeholder.svg?height=200&width=300", description: "The Pink City" },
                { name: "Udaipur", image: "/placeholder.svg?height=200&width=300", description: "City of Lakes" },
                { name: "Jaisalmer", image: "/placeholder.svg?height=200&width=300", description: "The Golden City" },
                {
                    name: "Ranthambore National Park",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Famous tiger reserve",
                },
                {
                    name: "Pushkar",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Sacred town with Brahma Temple",
                },
            ],
            Kerala: [
                {
                    name: "Alleppey Backwaters",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Famous for houseboat cruises",
                },
                {
                    name: "Munnar",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Hill station with tea plantations",
                },
                { name: "Kochi", image: "/placeholder.svg?height=200&width=300", description: "Historic port city" },
                {
                    name: "Wayanad",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Green paradise with wildlife",
                },
                { name: "Kovalam Beach", image: "/placeholder.svg?height=200&width=300", description: "Crescent-shaped beach" },
            ],
            Goa: [
                { name: "Calangute Beach", image: "/placeholder.svg?height=200&width=300", description: "Queen of Beaches" },
                {
                    name: "Basilica of Bom Jesus",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "UNESCO World Heritage Site",
                },
                {
                    name: "Dudhsagar Falls",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Four-tiered waterfall",
                },
                {
                    name: "Fort Aguada",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "17th-century Portuguese fort",
                },
                {
                    name: "Anjuna Flea Market",
                    image: "/placeholder.svg?height=200&width=300",
                    description: "Famous hippie market",
                },
            ],
        }

        return suggestions[dest] || []
    }

    const suggestions = getSuggestions(destination)

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Explore Nearby Places</h2>
            <div className="space-y-4">
                {
                    suggestions.map((suggestion, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="flex flex-col sm:flex-row">
                                <div className="w-full sm:w-1/3">
                                    <Image
                                        src={suggestion.image || "/placeholder.svg"}
                                        alt={suggestion.name}
                                        className="w-full h-full object-cover"
                                        height={40}
                                        width={40}
                                    />
                                </div>
                                <CardContent className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-semibold text-lg">{suggestion.name}</h3>
                                        <p className="text-gray-600 text-sm">{suggestion.description}</p>
                                    </div>
                                    <Button className="mt-4 bg-[#00A699] hover:bg-[#008b80] text-white">
                                        <PlusCircle className="mr-2 h-4 w-4" />
                                        Add to Itinerary
                                    </Button>
                                </CardContent>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}