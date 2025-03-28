"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function AboutContact() {
    return (
        <section className="py-16 bg-[#F4F4F9]">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-lg text-gray-600">
                        Have questions, feedback, or partnership opportunities? We'd love to hear from you.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Name
                                            </label>
                                            <Input id="name" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <Input id="email" type="email" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <Input id="subject" placeholder="How can we help you?" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
                                    </div>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                        <Button className="bg-[#00A699] hover:bg-[#008b80] w-full md:w-auto">Send Message</Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <motion.div
                                        className="flex items-start"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <motion.div
                                            className="mr-4 bg-[#e6f7f6] p-2 rounded-full text-[#00A699]"
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <MapPin className="h-5 w-5" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium mb-1">Our Office</h4>
                                            <p className="text-gray-600">
                                                123 Innovation Hub, Koramangala
                                                <br />
                                                Bangalore, Karnataka 560034
                                                <br />
                                                India
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <motion.div
                                            className="mr-4 bg-[#e6f7f6] p-2 rounded-full text-[#00A699]"
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Mail className="h-5 w-5" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium mb-1">Email Us</h4>
                                            <p className="text-gray-600">
                                                info@aitripmate.com
                                                <br />
                                                support@aitripmate.com
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-start"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <motion.div
                                            className="mr-4 bg-[#e6f7f6] p-2 rounded-full text-[#00A699]"
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Phone className="h-5 w-5" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium mb-1">Call Us</h4>
                                            <p className="text-gray-600">
                                                +91 80 1234 5678
                                                <br />
                                                Mon-Fri, 9:00 AM - 6:00 PM IST
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-medium mb-3">Follow Us</h4>
                                    <div className="flex space-x-4">
                                        {
                                            ["facebook", "instagram", "twitter", "linkedin"].map((social, index) => (
                                                <motion.a
                                                    key={social}
                                                    href="#"
                                                    className="bg-[#e6f7f6] p-2 rounded-full text-[#00A699] hover:bg-[#00A699] hover:text-white transition-colors"
                                                    whileHover={{ y: -5, scale: 1.2 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                >
                                                    {
                                                        social === "facebook" && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                            </svg>
                                                        )
                                                    }
                                                    {
                                                        social === "instagram" && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                            </svg>
                                                        )
                                                    }
                                                    {
                                                        social === "twitter" && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                            </svg>
                                                        )
                                                    }
                                                    {
                                                        social === "linkedin" && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                                <circle cx="4" cy="4" r="2"></circle>
                                                            </svg>
                                                        )
                                                    }
                                                </motion.a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}