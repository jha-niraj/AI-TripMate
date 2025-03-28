"use client"

import { Target, Heart, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motionwrapper";

export function AboutMission() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-600">
                        At AI Trip Mate, we&apos;re on a mission to transform how people plan and experience travel. We believe that
                        every journey should be personalized, stress-free, and filled with authentic experiences that create lasting
                        memories.
                    </p>
                </motion.div>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <StaggerItem index={0}>
                        <motion.div
                            className="text-center"
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <motion.div
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f7f6] text-[#00A699] mb-6"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Target className="h-8 w-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To create a world where travel planning is intuitive, personalized, and accessible to everyone, powered
                                by the latest advancements in artificial intelligence.
                            </p>
                        </motion.div>
                    </StaggerItem>
                    <StaggerItem index={1}>
                        <motion.div
                            className="text-center"
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <motion.div
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f7f6] text-[#00A699] mb-6"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3, type: "spring" }}
                            >
                                <Heart className="h-8 w-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                            <p className="text-gray-600">
                                We&apos;re guided by authenticity, innovation, inclusivity, and a deep respect for diverse cultures and
                                sustainable travel practices that benefit local communities.
                            </p>
                        </motion.div>
                    </StaggerItem>
                    <StaggerItem index={2}>
                        <motion.div
                            className="text-center"
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <motion.div
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f7f6] text-[#00A699] mb-6"
                                animate={{ rotate: [0, 10, 0, -10, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                            >
                                <Globe className="h-8 w-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
                            <p className="text-gray-600">
                                We&apos;re committed to promoting responsible tourism and supporting local economies by connecting travelers
                                with authentic experiences that respect local cultures and environments.
                            </p>
                        </motion.div>
                    </StaggerItem>
                </StaggerContainer>
                <motion.div
                    className="mt-16 bg-[#F4F4F9] p-8 rounded-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-center">Our Story</h3>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-600 mb-4">
                            AI Trip Mate was founded in 2022 by a group of travel enthusiasts and AI specialists who were frustrated
                            with the fragmented and time-consuming nature of travel planning. We saw an opportunity to leverage
                            artificial intelligence to create a more seamless, personalized travel planning experience.
                        </p>
                        <p className="text-gray-600 mb-4">
                            What started as a simple chatbot has evolved into a comprehensive travel platform that helps thousands of
                            travelers discover new destinations, plan detailed itineraries, and connect with like-minded explorers.
                        </p>
                        <p className="text-gray-600">
                            Today, we&apos;re proud to be at the forefront of AI-powered travel planning, constantly innovating and
                            expanding our offerings to help travelers experience the world in more meaningful ways.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}