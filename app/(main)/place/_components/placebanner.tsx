"use client"

import { motion } from "framer-motion"

interface PlaceBannerProps {
    destination: string
}

export function PlaceBanner({ destination }: PlaceBannerProps) {
    const getBannerImage = (dest: string) => {
        const destinations: Record<string, string> = {
            Maharashtra: "https://media.istockphoto.com/id/1477558521/vector/happy-maharastra-day-written-on-flag-in-hindi-with-dotted-maharastra-map.jpg?s=612x612&w=0&k=20&c=LQ_89EVFYv60Xa-M41-NvPhR0J8B3Uilfo6M4b784FA=",
            Himachal: "https://media.istockphoto.com/id/1284679139/photo/mountain-landscape-with-green-grass-meadows-scenic-camping-himalayas-peaks-alpine-from-the.jpg?s=612x612&w=0&k=20&c=HakKeu5JZYpVx-cEThJWXXKI3xWhbx1JIaiTXp2Q3BQ=",
            Rajasthan: "https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=",
            Kerala: "https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.jpg?s=612x612&w=0&k=20&c=PYp-SgZO5Wkd7Ja2FPINpPlEjZZU24jYdEhxjQST-dU=",
            Goa: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.jpg?s=612x612&w=0&k=20&c=BE0ZCnKZj8xi9Zgx5meO77k-o8v8EPT9TwlsPvY3TMc=",
        }

        return destinations[dest] || "/placeholder.svg?height=600&width=1600"
    }

    return (
        <div className="relative h-[30vh] min-h-[150px] w-full overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${getBannerImage(destination)}')`,
                    filter: "brightness(0.7)",
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="relative h-full flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className="text-5xl font-bold text-white">{destination}</h1>
            </motion.div>
        </div>
    )
}