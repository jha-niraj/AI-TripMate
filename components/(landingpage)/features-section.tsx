"use client"

import type React from "react"
import { Brain, Map, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/motionwrapper"

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
    index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
    return (
        <StaggerItem index={index}>
            <motion.div
                className="flex flex-col items-center text-center p-6"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
                <motion.div
                    className="mb-4 text-[#00A699]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                    {icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </motion.div>
        </StaggerItem>
    )
}

export function FeaturesSection() {
    const features = [
        {
            icon: <Brain size={48} />,
            title: "Smart Suggestions",
            description:
                "Our AI analyzes thousands of travel reviews and data points to recommend the perfect destinations based on your preferences.",
        },
        {
            icon: <Map size={48} />,
            title: "Local Insights",
            description:
                "Get insider tips and hidden gems that only locals know about, helping you experience destinations like a true native.",
        },
        {
            icon: <MessageSquare size={48} />,
            title: "AI Chat Support",
            description:
                "Our intelligent chatbot is available 24/7 to answer your questions and help you plan every aspect of your journey.",
        },
    ]

    return (
        <section className="py-32 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Why Choose AI Trip Mate
                </motion.h2>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                index={index}
                            />
                        ))
                    }
                </StaggerContainer>
            </div>
        </section>
    )
}