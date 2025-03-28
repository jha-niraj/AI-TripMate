interface PlaceBannerProps {
    destination: string
}

export function PlaceBanner({ destination }: PlaceBannerProps) {
    const getBannerImage = (dest: string) => {
        const destinations: Record<string, string> = {
            Maharashtra: "/placeholder.svg?height=600&width=1600",
            Himachal: "/placeholder.svg?height=600&width=1600",
            Rajasthan: "/placeholder.svg?height=600&width=1600",
            Kerala: "/placeholder.svg?height=600&width=1600",
            Goa: "/placeholder.svg?height=600&width=1600",
        }

        return destinations[dest] || "/placeholder.svg?height=600&width=1600"
    }

    return (
        <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${getBannerImage(destination)}')`,
                    filter: "brightness(0.7)",
                }}
            />
            <div className="relative h-full flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">{destination}</h1>
            </div>
        </div>
    )
}

