import Link from "next/link"
import { Globe, Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 w-full text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Globe className="h-6 w-6 text-[#00A699]" />
                            <span className="font-bold text-xl">AI Trip Mate</span>
                        </div>
                        <p className="text-gray-400 mb-4">Your AI-powered travel companion</p>
                        <p className="text-gray-400">© {new Date().getFullYear()} AI Trip Mate. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                            About Us
                        </Link>
                        <Link href="/itinerary-planner" className="text-gray-400 hover:text-white transition-colors">
                            Itinerary Planner
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-6 w-6" />
                            </Link>
                        </div>
                        <div className="mt-6">
                            <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
                                />
                                <button className="bg-[#00A699] hover:bg-[#008b80] px-4 py-2 rounded-r-md">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

