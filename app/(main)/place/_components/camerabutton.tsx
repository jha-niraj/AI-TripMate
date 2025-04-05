"use client"

import { Camera } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function CameraButton() {
    const router = useRouter()

    return (
        <motion.div
            className="fixed top-24 right-6 z-40"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5,
            }}
        >
            <motion.button
                onClick={() => router.push("/whereami")}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FF6F61] text-white shadow-lg hover:bg-[#e5645a]"
                whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
            >
                <Camera size={24} />
            </motion.button>
            <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0"
                animate={{ opacity: [0, 0.9, 0] }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                }}
            >
                Where am I?
            </motion.div>
        </motion.div>
    )
}