"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInUp } from "@/components/motionwrapper"
import Image from "next/image"

interface HotelBookingSectionProps {
    destination: string
}

export function HotelBookingSection({ destination }: HotelBookingSectionProps) {
    return (
        <section className="py-8">
            <FadeIn>
                <div className="bg-gradient-to-r from-[#FF6F61] to-[#e5645a] rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-6 md:mb-0 md:mr-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
                                        <Home className="mr-3 h-8 w-8" />
                                        Book Your Home, Far From Home
                                    </h2>
                                </motion.div>

                                <FadeInUp>
                                    <p className="text-white text-lg mb-6 max-w-2xl">
                                        Find the perfect accommodation in {destination} that suits your style and budget. From luxury hotels
                                        to cozy homestays, we&apos;ve partnered with the best properties to ensure a comfortable stay.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {
                                            ["Verified Properties", "Best Price Guarantee", "Secure Booking", "24/7 Support"].map(
                                                (feature, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm flex items-center"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                                                    >
                                                        <Star className="h-3 w-3 mr-1" />
                                                        {feature}
                                                    </motion.div>
                                                ),
                                            )
                                        }
                                    </div>
                                </FadeInUp>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link href={`/hotels/${destination.toLowerCase()}`}>
                                        <Button className="bg-white text-[#FF6F61] hover:bg-gray-100 px-8 py-6 text-lg rounded-lg">
                                            Browse Hotels
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                            <motion.div
                                className="hidden md:block w-64 h-64 relative"
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="absolute inset-0 bg-white shadow-lg rounded-lg transform rotate-3">
                                    <Image
                                        src="/placeholder.svg?height=300&width=300"
                                        alt="Luxury hotel"
                                        className="w-full h-full object-cover rounded-lg opacity-70"
                                        height={30}
                                        width={30}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-white shadow-lg rounded-lg transform -rotate-3">
                                    <Image
                                        src="/placeholder.svg?height=300&width=300"
                                        alt="Cozy homestay"
                                        className="w-full h-full object-cover rounded-lg opacity-70"
                                        height={30}
                                        width={30}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-white shadow-lg rounded-lg">
                                    <Image
                                        src="/placeholder.svg?height=300&width=300"
                                        alt="Hotel room"
                                        className="w-full h-full object-cover rounded-lg"
                                        height={30}
                                        width={30}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}