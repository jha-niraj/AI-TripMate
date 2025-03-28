import type React from "react"
import { Search, Lightbulb, Map } from "lucide-react"

interface StepProps {
    icon: React.ReactNode
    title: string
    description: string
    step: number
}

function Step({ icon, title, description, step }: StepProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-[#00A699] flex items-center justify-center text-white">{icon}</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FF6F61] flex items-center justify-center text-white font-bold">
                    {step}
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 max-w-xs">{description}</p>
        </div>
    )
}

export function HowItWorks() {
    return (
        <section className="py-24 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Step
                        icon={<Search size={32} />}
                        title="Search a Place"
                        description="Enter your destination or browse our curated list of popular locations around the world."
                        step={1}
                    />
                    <Step
                        icon={<Lightbulb size={32} />}
                        title="Get Suggestions"
                        description="Our AI analyzes your preferences and provides personalized recommendations for attractions, dining, and activities."
                        step={2}
                    />
                    <Step
                        icon={<Map size={32} />}
                        title="Plan Your Trip"
                        description="Save your favorite suggestions, create a custom itinerary, and access it anytime during your journey."
                        step={3}
                    />
                </div>
            </div>
        </section>
    )
}

