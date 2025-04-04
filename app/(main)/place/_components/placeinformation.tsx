"use client"

import { motion } from "framer-motion"
import { Info, MapPin, Calendar, Landmark } from "lucide-react"
import { FadeIn, FadeInUp } from "@/components/motionwrapper"

interface PlaceInformationProps {
    destination: string
}

export function PlaceInformation({ destination }: PlaceInformationProps) {
    const getPlaceInfo = (dest: string) => {
        const placeInfo: Record<
            string,
            {
                description: string
                history: string
                culture: string
                bestTimeToVisit: string
                keyAttractions: string[]
                funFacts: string[]
            }
        > = {
            Maharashtra: {
                description:
                    "Maharashtra is a state spanning west-central India, best known for its fast-paced capital, Mumbai. The state offers a diverse landscape from the lush green Sahyadri mountain range to beautiful beaches along the Arabian Sea coast.",
                history:
                    "Maharashtra has a rich history dating back to the 4th century BCE. It has been ruled by several dynasties including the Satavahanas, Chalukyas, and Marathas before becoming part of British India. The Maratha Empire, founded by Shivaji Maharaj in the 17th century, played a significant role in shaping the state's identity.",
                culture:
                    "The culture of Maharashtra combines traditional Hindu customs with attributes from the Maratha Empire. Marathi is the official language, and the state celebrates festivals like Ganesh Chaturthi with great enthusiasm. Traditional Maharashtrian cuisine includes dishes like vada pav, puran poli, and modak.",
                bestTimeToVisit: "October to March, when the weather is pleasant with temperatures ranging from 10°C to 35°C.",
                keyAttractions: [
                    "Gateway of India and Marine Drive in Mumbai",
                    "Ajanta and Ellora Caves (UNESCO World Heritage Sites)",
                    "Hill stations like Mahabaleshwar and Lonavala",
                    "Beaches of Alibaug and Ganpatipule",
                    "Shirdi Sai Baba Temple",
                ],
                funFacts: [
                    "Mumbai's film industry, Bollywood, produces more films annually than Hollywood",
                    "Maharashtra has over 350 forts, the highest number in India",
                    "The world's second-largest collection of Art Deco buildings is in Mumbai",
                ],
            },
            Himachal: {
                description:
                    "Himachal Pradesh is a northern Indian state in the Himalayas, known for its stunning mountain scenery, hill stations, and outdoor activities. Its name means 'Land of Snowy Mountains' in Sanskrit.",
                history:
                    "Himachal Pradesh has been inhabited since pre-historic times. Many areas were part of ancient kingdoms like Kullu, Chamba, and Bushahr. The region came under British rule in the 19th century and became a full-fledged state of India in 1971.",
                culture:
                    "The culture of Himachal Pradesh is influenced by its mountainous terrain and religious diversity. The state has a rich tradition of handicrafts, folk dances, and music. Local festivals like Kullu Dussehra and Mandi Shivratri are celebrated with great fervor.",
                bestTimeToVisit: "March to June for pleasant weather, and December to February for snow experiences.",
                keyAttractions: [
                    "Shimla - the former summer capital of British India",
                    "Manali and Solang Valley for adventure sports",
                    "Dharamshala and McLeodganj - home to the Dalai Lama",
                    "Spiti Valley - known as 'Little Tibet'",
                    "Rohtang Pass for stunning mountain views",
                ],
                funFacts: [
                    "Himachal Pradesh is home to the world's highest cricket ground in Chail",
                    "The Great Himalayan National Park is a UNESCO World Heritage Site",
                    "Spiti Valley has some of the oldest monasteries in the world",
                ],
            },
            Rajasthan: {
                description:
                    "Rajasthan, the 'Land of Kings,' is India's largest state by area, known for its majestic palaces, formidable forts, vibrant culture, and the vast Thar Desert. It represents the colorful and royal heritage of India.",
                history:
                    "Rajasthan has a glorious history of brave Rajput warriors and their kingdoms. The region was home to several powerful dynasties including the Rajputs, Mughals, and Marathas. The princely states of Rajasthan were integrated into India after independence in 1947.",
                culture:
                    "Rajasthani culture is vibrant and colorful, with distinctive music, dance, and art forms. The state is famous for its folk music, Ghoomar dance, tie-dye textiles, and miniature paintings. Traditional Rajasthani cuisine includes dal baati churma, gatte ki sabzi, and laal maas.",
                bestTimeToVisit: "October to March, when the desert heat subsides and temperatures are pleasant.",
                keyAttractions: [
                    "Amber Fort and Hawa Mahal in Jaipur",
                    "Mehrangarh Fort in Jodhpur",
                    "City Palace and Lake Pichola in Udaipur",
                    "Jaisalmer Fort and Sam Sand Dunes",
                    "Ranthambore National Park for tiger safaris",
                ],
                funFacts: [
                    "Jaipur is known as the 'Pink City' due to the distinctive color of its buildings",
                    "Rajasthan has the only hill station in the Aravalli Range - Mount Abu",
                    "The Jaipur Literature Festival is the world's largest free literary festival",
                ],
            },
            Kerala: {
                description:
                    "Kerala, known as 'God's Own Country,' is a state on India's tropical Malabar Coast. It's famous for its palm-lined beaches, backwaters, tea plantations, and distinctive cuisine. The state is also known for its well-developed healthcare and education systems.",
                history:
                    "Kerala has a rich maritime history dating back to 3000 BCE, with trade connections to the Phoenicians, Romans, Arabs, and Chinese. The region was ruled by various dynasties including the Cheras, Zamorins, and Travancore royal family before becoming part of independent India in 1947.",
                culture:
                    "Kerala's culture is a blend of Aryan and Dravidian influences. The state is known for classical art forms like Kathakali, Mohiniyattam, and Kalaripayattu (martial art). Malayalam is the official language, and the cuisine features coconut, rice, and seafood prominently.",
                bestTimeToVisit: "September to March, after the monsoon season when the landscape is lush green.",
                keyAttractions: [
                    "Alleppey backwaters and houseboat cruises",
                    "Munnar and Wayanad hill stations",
                    "Kovalam and Varkala beaches",
                    "Periyar Wildlife Sanctuary",
                    "Fort Kochi's colonial architecture",
                ],
                funFacts: [
                    "Kerala has a 100% literacy rate, the highest in India",
                    "The state practices a matrilineal society in many communities",
                    "Kochi has the oldest European church and active Jewish synagogue in India",
                ],
            },
            Goa: {
                description:
                    "Goa is India's smallest state by area and is located on the southwestern coast. Famous for its beaches, nightlife, and Portuguese-influenced architecture, Goa offers a unique blend of Indian and Western cultures.",
                history:
                    "Goa has a rich history shaped by over 450 years of Portuguese colonization from 1510 until 1961, when it was annexed by India. This long period of European influence has given Goa a distinctive character that sets it apart from the rest of India.",
                culture:
                    "Goan culture is a unique fusion of East and West. The state celebrates both Hindu and Christian festivals with equal enthusiasm. Konkani is the official language, and the cuisine features seafood, coconut, and spices with Portuguese influences seen in dishes like vindaloo and bebinca.",
                bestTimeToVisit:
                    "November to February, during the winter months when the weather is pleasant and perfect for beach activities.",
                keyAttractions: [
                    "Beaches like Baga, Calangute, and Palolem",
                    "Basilica of Bom Jesus and Se Cathedral in Old Goa",
                    "Dudhsagar Falls",
                    "Spice plantations",
                    "Saturday Night Market at Arpora",
                ],
                funFacts: [
                    "Goa has Asia's only Naval Aviation Museum",
                    "The state celebrates over 50 festivals throughout the year",
                    "Goa was once known as the 'Rome of the East' due to its many churches",
                ],
            },
        }

        return (
            placeInfo[dest] || {
                description: "A beautiful destination waiting to be explored.",
                history: "This region has a rich historical background.",
                culture: "The local culture is vibrant and welcoming.",
                bestTimeToVisit: "The destination can be visited year-round.",
                keyAttractions: ["Local sights", "Natural beauty", "Cultural experiences"],
                funFacts: ["An interesting destination with unique characteristics."],
            }
        )
    }

    const placeInfo = getPlaceInfo(destination)

    return (
        <section className="py-8">
            <FadeIn>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00A699] to-[#008b80] p-6">
                        <h2 className="text-2xl font-bold text-white flex items-center">
                            <Info className="mr-2" />
                            About {destination}
                        </h2>
                    </div>
                    <div className="p-6">
                        <FadeInUp className="mb-6">
                            <p className="text-gray-700 leading-relaxed">{placeInfo.description}</p>
                        </FadeInUp>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <FadeInUp className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#00A699] mb-2 flex items-center">
                                        <Landmark className="mr-2 h-5 w-5" />
                                        History
                                    </h3>
                                    <p className="text-gray-600">{placeInfo.history}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#00A699] mb-2 flex items-center">
                                        <Calendar className="mr-2 h-5 w-5" />
                                        Best Time to Visit
                                    </h3>
                                    <p className="text-gray-600">{placeInfo.bestTimeToVisit}</p>
                                </div>
                            </FadeInUp>
                            <FadeInUp className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#00A699] mb-2">Culture</h3>
                                    <p className="text-gray-600">{placeInfo.culture}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#00A699] mb-2 flex items-center">
                                        <MapPin className="mr-2 h-5 w-5" />
                                        Key Attractions
                                    </h3>
                                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                        {
                                            placeInfo.keyAttractions.map((attraction, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {attraction}
                                                </motion.li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </FadeInUp>
                        </div>
                        <FadeInUp>
                            <div className="bg-[#F4F4F9] p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-[#00A699] mb-2">Fun Facts</h3>
                                <ul className="space-y-2">
                                    {
                                        placeInfo.funFacts.map((fact, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <span className="bg-[#00A699] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                                    {index + 1}
                                                </span>
                                                <span className="text-gray-700">{fact}</span>
                                            </motion.li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}