"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Input } from "../ui/input"

export function HeroSection() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedDestination, setSelectedDestination] = useState("")

    const handleSearch = () => {
        const destination = selectedDestination || searchQuery
        if (destination) {
            window.location.href = `/place/${destination.toLowerCase()}`
        }
    }

    return (
        <section className="relative h-screen bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto h-full">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/herosectionimage.png')",
                        filter: "brightness(0.7)",
                    }}
                />
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Plan Your Perfect Trip with AI Trip Mate
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Discover destinations, get insider tips, and let AI guide your journey.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="relative w-full sm:w-auto sm:flex-1">
                                <Input
                                    type="text"
                                    placeholder="Search for a destination (e.g., Paris, Tokyo...)"
                                    className="w-full h-12 px-4 rounded-lg placeholder:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00A699]"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                />
                            </div>
                            <div className="w-full sm:w-auto">
                                <Select onValueChange={setSelectedDestination}>
                                    <SelectTrigger className="w-full sm:w-[180px] h-12 bg-white">
                                        <SelectValue placeholder="Popular places" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                        <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                        <SelectItem value="kerala">Kerala</SelectItem>
                                        <SelectItem value="goa">Goa</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    className="w-full sm:w-auto h-12 bg-[#00A699] hover:bg-[#008b80] text-white px-6"
                                    onClick={handleSearch}
                                >
                                    <Search className="mr-2 h-5 w-5" />
                                    Search
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}