"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Testimonial {
    id: number
    name: string
    photo: string
    quote: string
    location: string
}

export function TestimonialsSection() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Sarah Johnson",
            photo: "https://media.istockphoto.com/id/1029797636/photo/school-girl-stock-image.jpg?s=612x612&w=0&k=20&c=vTO9wMeghrSTzTrKNvv_vBmjF7yJMMPA-coFg3bab2w=",
            quote:
                "AI Trip Mate transformed our family vacation! The personalized recommendations were spot on, and we discovered places we would have never found on our own.",
            location: "London, UK",
        },
        {
            id: 2,
            name: "Michael Chen",
            photo: "https://media.istockphoto.com/id/1167770705/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-approving-doing.jpg?s=612x612&w=0&k=20&c=Og7mZPpLzby9Cfs5jFgxGz6xGowpjV3Pl4WD_vtL7Sw=",
            quote:
                "As a solo traveler, I was amazed by how well the AI understood my preferences. The chatbot was incredibly helpful when I needed to make last-minute changes to my itinerary.",
            location: "Toronto, Canada",
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            photo: "https://media.istockphoto.com/id/1496615445/photo/portrait-of-beautiful-happy-woman-smiling-during-sunset-outdoor.jpg?s=612x612&w=0&k=20&c=_HXfCjbresNg_9Y-z1XHrw-JPBzov9l39RK_8Qmv7nk=",
            quote:
                "The local insights feature is a game-changer! We enjoyed authentic experiences and avoided tourist traps thanks to AI Trip Mate's suggestions.",
            location: "Barcelona, Spain",
        },
        {
            id: 4,
            name: "David Kim",
            photo: "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=",
            quote:
                "Planning our honeymoon was stress-free with AI Trip Mate. The recommendations were romantic and tailored perfectly to our interests.",
            location: "Seoul, South Korea",
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0])

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
        setCurrentIndex(newIndex)
        setActiveTestimonial(testimonials[newIndex])
    }

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % testimonials.length
        setCurrentIndex(newIndex)
        setActiveTestimonial(testimonials[newIndex])
    }

    return (
        <section className="py-24 w-full bg-[#F4F4F9]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>

                <div className="max-w-4xl mx-auto">
                    <Card className="border-none shadow-md bg-white rounded-xl overflow-hidden">
                        <CardContent className="p-8">
                            <div className="flex flex-col items-center text-center">
                                <Quote className="h-12 w-12 text-[#00A699] mb-6" />
                                <p className="text-lg mb-8 italic">&quot;{activeTestimonial.quote}&quot;</p>
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={activeTestimonial.photo || "/placeholder.svg"}
                                        alt={activeTestimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="text-left">
                                        <h4 className="font-semibold">{activeTestimonial.name}</h4>
                                        <p className="text-gray-600">{activeTestimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex justify-center mt-8 space-x-4">
                        <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <div className="flex space-x-2">
                            {
                            testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#00A699]" : "bg-gray-300"}`}
                                    onClick={() => {
                                        setCurrentIndex(index)
                                        setActiveTestimonial(testimonials[index])
                                    }
                                }
                                />
                            ))
                            }
                        </div>
                        <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}