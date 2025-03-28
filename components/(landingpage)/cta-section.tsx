import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
    return (
        <section className="py-24 w-full bg-gradient-to-r from-[#00A699] to-[#008b80] text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore? Start Planning Now!</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Let AI Trip Mate guide you to your next unforgettable adventure with personalized recommendations and insider
                    tips.
                </p>
                <Link href="/signup">
                    <Button className="bg-[#FF6F61] hover:bg-[#e5645a] text-white px-8 py-6 text-lg rounded-lg">
                        Get Started
                    </Button>
                </Link>
            </div>
        </section>
    )
}

