"use client"

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaggerContainer, StaggerItem } from "@/components/motionwrapper";
import { CalendarDays, Umbrella, Snowflake, Sun } from "lucide-react";

interface SeasonalDestination {
    name: string
    image: string
    description: string
    slug: string
    activities: string[]
}

export function SeasonalRecommendations() {
    // Get current season based on month
    const getCurrentSeason = () => {
        const month = new Date().getMonth()
        if (month >= 2 && month <= 4) return "spring"
        if (month >= 5 && month <= 7) return "summer"
        if (month >= 8 && month <= 10) return "autumn"
        return "winter"
    }

    const [currentSeason, setCurrentSeason] = useState(getCurrentSeason())

    const seasonalDestinations: Record<string, SeasonalDestination[]> = {
        winter: [
            {
                name: "Rajasthan",
                image: "https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=",
                description: "Perfect time to explore the desert state with pleasant temperatures and vibrant festivals.",
                slug: "rajasthan",
                activities: ["Desert Safari", "Palace Tours", "Winter Festivals"],
            },
            {
                name: "Goa",
                image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.jpg?s=612x612&w=0&k=20&c=BE0ZCnKZj8xi9Zgx5meO77k-o8v8EPT9TwlsPvY3TMc=",
                description: "Enjoy the beaches and nightlife during the peak season with perfect weather.",
                slug: "goa",
                activities: ["Beach Parties", "Water Sports", "Christmas Celebrations"],
            },
            {
                name: "Kerala",
                image: "https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.jpg?s=612x612&w=0&k=20&c=PYp-SgZO5Wkd7Ja2FPINpPlEjZZU24jYdEhxjQST-dU=",
                description: "Experience the backwaters and hill stations with cool, comfortable climate.",
                slug: "kerala",
                activities: ["Houseboat Stays", "Ayurvedic Retreats", "Wildlife Safaris"],
            },
        ],
        summer: [
            {
                name: "Himachal Pradesh",
                image: "https://media.istockphoto.com/id/1284679139/photo/mountain-landscape-with-green-grass-meadows-scenic-camping-himalayas-peaks-alpine-from-the.jpg?s=612x612&w=0&k=20&c=HakKeu5JZYpVx-cEThJWXXKI3xWhbx1JIaiTXp2Q3BQ=",
                description: "Escape the heat in these cool mountain retreats with stunning landscapes.",
                slug: "himachal",
                activities: ["Trekking", "Paragliding", "River Rafting"],
            },
            {
                name: "Ladakh",
                image: "https://media.istockphoto.com/id/1155675399/photo/pangong-lake.jpg?s=612x612&w=0&k=20&c=nBGDknbZslRWqMtQGZOyqkb_KzcT-Mx4DrSfVLQUYxQ=",
                description: "The best time to visit this high-altitude desert with clear mountain views.",
                slug: "ladakh",
                activities: ["Monastery Tours", "Mountain Biking", "Star Gazing"],
            },
            {
                name: "Darjeeling",
                image: "https://media.istockphoto.com/id/512978969/photo/darjeeling-town-and-tea-plantation-with-himalaya-mountains.jpg?s=612x612&w=0&k=20&c=akb6PoJL9ysBWQzEezhcKAPPKyHWcDwGDVxzkHx7u40=",
                description: "Enjoy the tea gardens and Himalayan views with pleasant summer weather.",
                slug: "darjeeling",
                activities: ["Tea Garden Tours", "Toy Train Rides", "Mountain Hiking"],
            },
        ],
        autumn: [
            {
                name: "Maharashtra",
                image: "https://media.istockphoto.com/id/1477558521/vector/happy-maharastra-day-written-on-flag-in-hindi-with-dotted-maharastra-map.jpg?s=612x612&w=0&k=20&c=LQ_89EVFYv60Xa-M41-NvPhR0J8B3Uilfo6M4b784FA=",
                description: "Post-monsoon greenery makes it perfect for exploring the Western Ghats.",
                slug: "maharashtra",
                activities: ["Waterfall Visits", "Fort Treks", "Festival Celebrations"],
            },
            {
                name: "Kolkata",
                image: "https://media.istockphoto.com/id/1164517176/photo/historic-howrah-bridge-with-boat-on-river-ganges-at-kolkata-india.jpg?s=612x612&w=0&k=20&c=aZX8zvFV5O1qtoWnv-gPtiW1eRPlUHeK_vjh87qLMU8=",
                description: "Experience the city during its famous Durga Puja celebrations.",
                slug: "kolkata",
                activities: ["Pandal Hopping", "Cultural Events", "Food Tours"],
            },
            {
                name: "Varanasi",
                image: "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?s=612x612&w=0&k=20&c=LbpIHRo7kGT7dbUr6b6UuD1d6P0yCaKZ2lbqo3TY988=",
                description: "Pleasant weather to explore the spiritual city and its ghats.",
                slug: "varanasi",
                activities: ["Ganga Aarti", "Temple Tours", "Boat Rides"],
            },
        ],
        spring: [
            {
                name: "Kashmir",
                image: "https://media.istockphoto.com/id/506116780/photo/morning-at-the-paradise-srinagar.jpg?s=612x612&w=0&k=20&c=05KYaEuMYHasAn1_vPxsXqO0i42XsEkGgR-oMoP7kVY=",
                description: "Witness the blooming tulips and almond blossoms in the valley.",
                slug: "kashmir",
                activities: ["Tulip Garden Visit", "Shikara Rides", "Mountain Treks"],
            },
            {
                name: "Sikkim",
                image: "https://media.istockphoto.com/id/687689872/photo/buddha-park-rabangla-sikkim.jpg?s=612x612&w=0&k=20&c=Qyv5tZifCjrKocUtcTZ8J95D7nQpseY0eFQAAR9P0z4=",
                description: "See rhododendrons in full bloom across the mountainsides.",
                slug: "sikkim",
                activities: ["Flower Festivals", "Monastery Visits", "Yak Safaris"],
            },
            {
                name: "Rishikesh",
                image: "https://media.istockphoto.com/id/1069264492/photo/spectacular-view-of-the-lakshman-temple-bathed-by-the-sacred-river-ganges-at-sunset.jpg?s=612x612&w=0&k=20&c=f-H_D86P9wO-q4E0Iv9VTy0EZeLa5izQUQCMSVCSzWk=",
                description: "Perfect weather for adventure sports and spiritual retreats.",
                slug: "rishikesh",
                activities: ["River Rafting", "Yoga Retreats", "Camping"],
            },
        ],
    }

    const getSeasonIcon = (season: string) => {
        switch (season) {
            case "winter":
                return <Snowflake className="h-5 w-5" />
            case "summer":
                return <Sun className="h-5 w-5" />
            case "autumn":
                return <CalendarDays className="h-5 w-5" />
            case "spring":
                return <Umbrella className="h-5 w-5" />
            default:
                return <CalendarDays className="h-5 w-5" />
        }
    }

    return (
        <section className="py-16 max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Seasonal Recommendations</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Discover the perfect destinations to visit right now, curated by our AI based on seasonal weather patterns,
                        local festivals, and traveler experiences.
                    </p>
                </motion.div>
                <Tabs defaultValue={currentSeason} className="w-full" onValueChange={setCurrentSeason}>
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                            {
                            Object.keys(seasonalDestinations).map((season) => (
                                <TabsTrigger key={season} value={season} className="flex items-center gap-2 capitalize">
                                    {getSeasonIcon(season)}
                                    {season}
                                </TabsTrigger>
                            ))
                            }
                        </TabsList>
                    </div>
                    {
                    Object.entries(seasonalDestinations).map(([season, destinations]) => (
                        <TabsContent key={season} value={season}>
                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {
                                destinations.map((destination, index) => (
                                    <StaggerItem key={destination.slug} index={index}>
                                        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                                            <Card className="overflow-hidden h-full flex flex-col">
                                                <div className="relative h-48 overflow-hidden">
                                                    <motion.img
                                                        src={destination.image}
                                                        alt={destination.name}
                                                        className="w-full h-full object-cover"
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ duration: 0.5 }}
                                                    />
                                                    <div className="absolute top-3 right-3 bg-[#00A699] text-white px-2 py-1 rounded-md text-sm font-medium">
                                                        Best in {season}
                                                    </div>
                                                </div>
                                                <CardContent className="p-5 flex-grow flex flex-col">
                                                    <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                                                    <p className="text-gray-600 mb-4 flex-grow">{destination.description}</p>
                                                    <div className="mb-4">
                                                        <h4 className="text-sm font-medium mb-2">Top Activities:</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {
                                                            destination.activities.map((activity, i) => (
                                                                <span key={i} className="text-xs bg-[#e6f7f6] text-[#00A699] px-2 py-1 rounded-full">
                                                                    {activity}
                                                                </span>
                                                            ))
                                                            }
                                                        </div>
                                                    </div>
                                                    <Link href={`/place/${destination.slug}`}>
                                                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                                            <Button className="w-full bg-[#00A699] hover:bg-[#008b80]">
                                                                Explore {destination.name}
                                                            </Button>
                                                        </motion.div>
                                                    </Link>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </StaggerItem>
                                ))
                                }
                            </StaggerContainer>
                        </TabsContent>
                    ))
                    }
                </Tabs>
            </div>
        </section>
    )
}