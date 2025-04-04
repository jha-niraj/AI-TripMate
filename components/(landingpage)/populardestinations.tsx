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
            image: "https://media.istockphoto.com/id/1477558521/vector/happy-maharastra-day-written-on-flag-in-hindi-with-dotted-maharastra-map.jpg?s=612x612&w=0&k=20&c=LQ_89EVFYv60Xa-M41-NvPhR0J8B3Uilfo6M4b784FA=",
            tagline: "Land of Forts and Beaches",
            slug: "maharashtra",
        },
        {
            name: "Himachal Pradesh",
            image: "https://media.istockphoto.com/id/1284679139/photo/mountain-landscape-with-green-grass-meadows-scenic-camping-himalayas-peaks-alpine-from-the.jpg?s=612x612&w=0&k=20&c=HakKeu5JZYpVx-cEThJWXXKI3xWhbx1JIaiTXp2Q3BQ=",
            tagline: "The Abode of Snow",
            slug: "himachal",
        },
        {
            name: "Rajasthan",
            image: "https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=",
            tagline: "Land of Kings",
            slug: "rajasthan",
        },
        {
            name: "Kerala",
            image: "https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.jpg?s=612x612&w=0&k=20&c=PYp-SgZO5Wkd7Ja2FPINpPlEjZZU24jYdEhxjQST-dU=",
            tagline: "God's Own Country",
            slug: "kerala",
        },
        {
            name: "Goa",
            image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.jpg?s=612x612&w=0&k=20&c=BE0ZCnKZj8xi9Zgx5meO77k-o8v8EPT9TwlsPvY3TMc=",
            tagline: "Pearl of the Orient",
            slug: "goa",
        },
    ]

    return (
        <section className="py-16 bg-[#F4F4F9]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

