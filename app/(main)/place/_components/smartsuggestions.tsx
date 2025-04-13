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
                    image: "/place/maharasthra/indiagate.jpeg",
                    description: "Historic arch monument in Mumbai",
                },
                {
                    name: "Ajanta & Ellora Caves",
                    image: "/place/maharasthra/eloracaves.jpeg",
                    description: "UNESCO World Heritage Sites",
                },
                { 
                    name: "Lonavala", 
                    image: "/place/maharasthra/lonavla.jpeg", 
                    description: "Popular hill station" 
                },
                {
                    name: "Shirdi Sai Baba Temple",
                    image: "/place/maharasthra/shirdisaibaba.jpeg",
                    description: "Famous spiritual destination",
                },
                {
                    name: "Mahabaleshwar",
                    image: "/place/maharasthra/mahabaleshwor.jpeg",
                    description: "Scenic hill station with strawberry farms",
                },
            ],
            Himachal: [
                {
                    name: "Shimla",
                    image: "/place/himachal/shimla.jpeg",
                    description: "Former summer capital of British India",
                },
                { 
                    name: "Manali", 
                    image: "/place/himachal/manali.jpeg", 
                    description: "Popular mountain resort town" 
                },
                { 
                    name: "Dharamshala", 
                    image: "/place/himachal/dharamshala.jpeg", 
                    description: "Home to the Dalai Lama" 
                },
                {
                    name: "Spiti Valley",
                    image: "/place/himachal/spiti.jpeg",
                    description: "Cold desert mountain valley",
                },
                { 
                    name: "Kullu", 
                    image: "/place/himachal/kullu.jpeg", 
                    description: "Valley of Gods" 
                },
            ],
            Rajasthan: [
                { 
                    name: "Jaipur", 
                    image: "/place/rajasthan/jaipur.jpeg", 
                    description: "The Pink City" 
                },
                { 
                    name: "Udaipur", 
                    image: "/place/rajasthan/udaipur.jpeg", 
                    description: "City of Lakes" 
                },
                { 
                    name: "Jaisalmer", 
                    image: "/place/rajasthan/rajasthandesert.jpeg", 
                    description: "The Golden City" 
                },
                {
                    name: "Ranthambore National Park",
                    image: "/place/rajasthan/ranthambore.jpeg",
                    description: "Famous tiger reserve",
                },
                {
                    name: "Pushkar",
                    image: "/place/rajasthan/pushkar.jpeg",
                    description: "Sacred town with Brahma Temple",
                },
            ],
            Kerala: [
                {
                    name: "Alleppey Backwaters",
                    image: "/place/kerela/alleppey.jpeg",
                    description: "Famous for houseboat cruises",
                },
                {
                    name: "Munnar",
                    image: "/place/kerela/munnar.jpeg",
                    description: "Hill station with tea plantations",
                },
                { 
                    name: "Kochi", 
                    image: "/place/kerela/kochi.jpeg", 
                    description: "Historic port city"
                },
                {
                    name: "Wayanad",
                    image: "/place/kerela/wayanad.jpeg",
                    description: "Green paradise with wildlife",
                },
                { 
                    name: "Kovalam Beach", 
                    image: "/place/kerela/kovalam.jpeg", 
                    description: "Crescent-shaped beach" 
                },
            ],
            Goa: [
                { 
                    name: "Calangute Beach", 
                    image: "/place/goa/calangute.jpeg", 
                    description: "Queen of Beaches" },
                {
                    name: "Basilica of Bom Jesus",
                    image: "/place/goa/bomjesus.jpeg",
                    description: "UNESCO World Heritage Site",
                },
                {
                    name: "Dudhsagar Falls",
                    image: "/place/goa/dudhsagar.jpeg",
                    description: "Four-tiered waterfall",
                },
                {
                    name: "Fort Aguada",
                    image: "/place/goa/fortaguda.jpeg",
                    description: "17th-century Portuguese fort",
                },
                {
                    name: "Anjuna Flea Market",
                    image: "/place/goa/anjunafleamarket.jpeg",
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