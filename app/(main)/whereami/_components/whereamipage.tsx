"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, MapPin, Compass, LocateFixed, X, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhereAmIContent() {
    const [isCapturing, setIsCapturing] = useState(false)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const handleCapture = () => {
        setIsCapturing(true)

        // Simulate camera capture
        setTimeout(() => {
            setIsCapturing(false)
            setIsAnalyzing(true)

            // Simulate analysis
            setTimeout(() => {
                setIsAnalyzing(false)
                setShowResult(true)
            }, 3000)
        }, 2000)
    }

    const resetProcess = () => {
        setIsCapturing(false)
        setIsAnalyzing(false)
        setShowResult(false)
    }

    // Scanning animation for the viewfinder
    const scanAnimation = {
        hidden: { opacity: 0, y: -200 },
        visible: {
            opacity: 0.5,
            y: 200,
            transition: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "linear",
            },
        },
    }

    return (
        <div className="container mx-auto px-4 py-8 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h1 className="text-4xl font-bold mb-4">Where Am I?</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Take a photo of your surroundings and our AI will identify your location using Google Earth integration.
                </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="relative aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        {
                            !isCapturing && !isAnalyzing && !showResult && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center"
                                >
                                    <Camera size={64} className="mx-auto mb-4 text-gray-400" />
                                    <p className="text-gray-400">Point your camera at a landmark or scenery</p>
                                </motion.div>
                            )
                        }
                        {
                            isCapturing && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center"
                                >
                                    <div className="relative w-24 h-24 mx-auto mb-4">
                                        <motion.div
                                            className="absolute inset-0 rounded-full border-4 border-white"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                                        />
                                        <Camera size={48} className="absolute inset-0 m-auto text-white" />
                                    </div>
                                    <p className="text-white text-lg">Capturing...</p>
                                </motion.div>
                            )
                        }
                        {
                            isAnalyzing && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center"
                                >
                                    <motion.div
                                        className="w-24 h-24 mx-auto mb-4 relative"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    >
                                        <RefreshCw size={48} className="absolute inset-0 m-auto text-[#00A699]" />
                                    </motion.div>
                                    <p className="text-white text-lg">Analyzing location...</p>
                                    <p className="text-gray-400 mt-2">Comparing with Google Earth data</p>
                                </motion.div>
                            )
                        }
                        {
                            showResult && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center p-6 bg-black bg-opacity-70 rounded-lg"
                                >
                                    <motion.div
                                        className="w-16 h-16 mx-auto mb-4 bg-[#00A699] rounded-full flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    >
                                        <MapPin size={32} className="text-white" />
                                    </motion.div>
                                    <h2 className="text-2xl font-bold mb-2">Taj Mahal, Agra</h2>
                                    <p className="text-gray-300 mb-4">Agra, Uttar Pradesh, India</p>
                                    <div className="flex justify-center space-x-4 text-sm text-gray-300">
                                        <div className="flex items-center">
                                            <Compass className="h-4 w-4 mr-1" />
                                            <span>27.1751° N, 78.0421° E</span>
                                        </div>
                                        <div className="flex items-center">
                                            <LocateFixed className="h-4 w-4 mr-1" />
                                            <span>Accuracy: High</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        }
                        {
                            !showResult && (
                                <motion.div
                                    className="absolute inset-x-0 h-1 bg-[#00A699] bg-opacity-50"
                                    variants={scanAnimation}
                                    initial="hidden"
                                    animate="visible"
                                />
                            )
                        }
                        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white opacity-70" />
                        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white opacity-70" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white opacity-70" />
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white opacity-70" />
                    </div>
                </motion.div>
                <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {
                        !isCapturing && !isAnalyzing && !showResult ? (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    onClick={handleCapture}
                                    className="bg-[#00A699] hover:bg-[#008b80] text-white px-8 py-6 text-lg rounded-full"
                                >
                                    <Camera className="mr-2 h-5 w-5" />
                                    Capture Location
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    onClick={resetProcess}
                                    className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-6 text-lg rounded-full"
                                    disabled={isCapturing || isAnalyzing}
                                >
                                    <X className="mr-2 h-5 w-5" />
                                    Reset
                                </Button>
                            </motion.div>
                        )
                    }
                </motion.div>
                <motion.div
                    className="mt-16 bg-gray-800 p-8 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-[#00A699] rounded-full p-2 mr-4 mt-1">
                                <Camera className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-1">Capture Your Surroundings</h3>
                                <p className="text-gray-300">Take a photo of landmarks, buildings, or natural features around you.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#00A699] rounded-full p-2 mr-4 mt-1">
                                <RefreshCw className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-1">AI Analysis</h3>
                                <p className="text-gray-300">
                                    Our AI analyzes the image and compares it with millions of locations in Google Earth&apos;s database.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#00A699] rounded-full p-2 mr-4 mt-1">
                                <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-1">Location Identification</h3>
                                <p className="text-gray-300">
                                    Get precise information about your current location, including coordinates and nearby attractions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                        <p className="text-gray-300 text-sm">
                            <strong>Note:</strong> This feature works best in areas with distinctive landmarks or scenery. For optimal
                            results, ensure your photo clearly captures recognizable features.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}