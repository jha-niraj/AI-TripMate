import { Lightbulb } from "lucide-react"

interface InsiderTipsProps {
    destination: string
}

export function InsiderTips({ destination }: InsiderTipsProps) {
    const getTips = (dest: string) => {
        const tips: Record<string, string[]> = {
            Maharashtra: [
                "Visit Mumbai's attractions early morning to avoid crowds and traffic.",
                "Try vada pav, pav bhaji, and Maharashtrian thali for authentic local cuisine.",
                "The best time to visit is from October to March when the weather is pleasant.",
                "Use the local train network in Mumbai for faster travel during rush hours.",
                "Explore the lesser-known beaches of Konkan coast for a peaceful experience.",
            ],
            Himachal: [
                "Visit during May-June for pleasant weather, or December-January for snow.",
                "Book accommodations in advance during peak seasons (summer and winter).",
                "Try local dishes like Dham, Madra, and Sidu for authentic Himachali cuisine.",
                "Carry warm clothes even in summer as evenings can get chilly in the mountains.",
                "Respect local customs when visiting remote villages and monasteries.",
            ],
            Rajasthan: [
                "The best time to visit is from October to March to avoid the extreme heat.",
                "Bargain at local markets - it's expected and part of the shopping experience.",
                "Try dal baati churma, laal maas, and kachori for authentic Rajasthani cuisine.",
                "Carry a water bottle and stay hydrated, especially during city tours.",
                "Respect dress codes when visiting temples and religious sites.",
            ],
            Kerala: [
                "The best time to visit is from September to March when the weather is pleasant.",
                "Try Kerala sadhya, appam with stew, and seafood for authentic cuisine.",
                "Book houseboats in Alleppey in advance, especially during peak season.",
                "Carry mosquito repellent, especially when visiting backwaters and forests.",
                "Learn a few basic Malayalam phrases to connect with locals.",
            ],
            Goa: [
                "Visit between November and February for perfect beach weather.",
                "Rent a scooter to explore the state - it's the most convenient way to get around.",
                "Try Goan fish curry, vindaloo, and bebinca for authentic local cuisine.",
                "North Goa is known for parties, while South Goa offers more peaceful beaches.",
                "Visit the spice plantations for a unique cultural experience.",
            ],
        }

        return tips[dest] || []
    }

    const tips = getTips(destination)

    return (
        <div className="mt-12 bg-[#F4F4F9] rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Lightbulb className="mr-2 text-[#FF6F61]" />
                Insider Tips for {destination}
            </h2>
            <ul className="space-y-3">
                {
                    tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                            <span className="bg-[#00A699] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                {index + 1}
                            </span>
                            <span>{tip}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

