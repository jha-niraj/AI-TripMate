import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface DestinationCardProps {
    name: string
    image: string
    tagline: string
    slug: string
}

function DestinationCard({ name, image, tagline, slug }: DestinationCardProps) {
    return (
        <Link href={`/place/${slug}`}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="h-48 overflow-hidden">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        height={40}
                        width={40}
                    />
                </div>
                <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-600">{tagline}</p>
                </CardContent>
            </Card>
        </Link>
    )
}

export function PopularDestinations() {
    const destinations = [
        {
            name: "Maharashtra",
            image: "/placeholder.svg?height=400&width=600",
            tagline: "Land of Forts and Beaches",
            slug: "maharashtra",
        },
        {
            name: "Himachal Pradesh",
            image: "/placeholder.svg?height=400&width=600",
            tagline: "The Abode of Snow",
            slug: "himachal",
        },
        {
            name: "Rajasthan",
            image: "/placeholder.svg?height=400&width=600",
            tagline: "Land of Kings",
            slug: "rajasthan",
        },
        {
            name: "Kerala",
            image: "/placeholder.svg?height=400&width=600",
            tagline: "God's Own Country",
            slug: "kerala",
        },
        {
            name: "Goa",
            image: "/placeholder.svg?height=400&width=600",
            tagline: "Pearl of the Orient",
            slug: "goa",
        },
    ]

    return (
        <section className="py-16 bg-[#F4F4F9]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {
                        destinations.map((destination) => (
                            <DestinationCard
                                key={destination.slug}
                                name={destination.name}
                                image={destination.image}
                                tagline={destination.tagline}
                                slug={destination.slug}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

