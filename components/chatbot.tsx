"use client"

import { useState, useEffect } from "react"
import { Send, X, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatbotProps {
    destination?: string
}

export function Chatbot({ destination }: ChatbotProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        {
            text: destination
                ? `Hi! How can I help you plan your stay in ${destination}?`
                : "Hi! I'm your AI Trip Mate. How can I help you plan your next adventure in India?",
            isUser: false,
        },
    ])
    const [inputValue, setInputValue] = useState("")

    // Disable scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleSendMessage = () => {
        if (!inputValue.trim()) return

        // Add user message
        setMessages([...messages, { text: inputValue, isUser: true }])

        // Simulate AI response
        setTimeout(() => {
            let response = "I'm processing your request..."

            if (inputValue.toLowerCase().includes("hotel") || inputValue.toLowerCase().includes("stay")) {
                response = destination
                    ? `There are several great hotels in ${destination} for all budgets. Would you like luxury, mid-range, or budget options?`
                    : "I can recommend hotels based on your destination. Which Indian state are you planning to visit?"
            } else if (
                inputValue.toLowerCase().includes("restaurant") ||
                inputValue.toLowerCase().includes("food") ||
                inputValue.toLowerCase().includes("eat")
            ) {
                response = destination
                    ? `${destination} has amazing culinary options! Are you interested in local cuisine or international restaurants?`
                    : "India has diverse culinary traditions. Tell me which state you're visiting, and I'll suggest some authentic dishes!"
            } else if (
                inputValue.toLowerCase().includes("attraction") ||
                inputValue.toLowerCase().includes("visit") ||
                inputValue.toLowerCase().includes("see")
            ) {
                response = destination
                    ? `${destination} has many wonderful attractions. Are you interested in historical sites, natural landscapes, or cultural experiences?`
                    : "India is rich in attractions. Which state would you like to explore?"
            }

            setMessages((prev) => [...prev, { text: response, isUser: false }])
        }, 1000)

        // Clear input
        setInputValue("")
    }

    return (
        <>
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                <Button
                    className={`rounded-full shadow-lg px-6 py-6 ${isOpen ? "bg-[#FF6F61] hover:bg-[#e5645a]" : "bg-[#00A699] hover:bg-[#008b80]"}`}
                    onClick={() => setIsOpen(!isOpen)}
                    size="lg"
                >
                    {
                        isOpen ? (
                            <X size={24} className="mr-2" />
                        ) : (
                            <>
                                <Bot size={24} className="mr-2" />
                                <span className="font-medium">AI Trip Assistant</span>
                            </>
                        )
                    }
                </Button>
            </div>
            {
                isOpen && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl h-[70vh] flex flex-col animate-fade-in">
                            <div className="bg-[#00A699] text-white p-4 rounded-t-xl flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold text-xl flex items-center">
                                        <Bot className="mr-2" /> AI Trip Mate
                                    </h3>
                                    <p className="text-sm opacity-80">Your intelligent travel companion</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:bg-[#008b80]"
                                >
                                    <X size={24} />
                                </Button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {
                                    messages.map((message, index) => (
                                        <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                                            {
                                                !message.isUser && (
                                                    <div className="w-8 h-8 rounded-full bg-[#00A699] flex items-center justify-center text-white mr-2">
                                                        <Bot size={16} />
                                                    </div>
                                                )
                                            }
                                            <div
                                                className={`max-w-[80%] rounded-lg p-3 ${message.isUser
                                                    ? "bg-[#00A699] text-white rounded-br-none"
                                                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                                                    }`}
                                            >
                                                {message.text}
                                            </div>
                                            {
                                                message.isUser && (
                                                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2">
                                                        <span className="text-sm">You</span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="border-t p-4">
                                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                                    <input
                                        type="text"
                                        placeholder="Ask me anything about your trip to India..."
                                        className="flex-1 bg-transparent border-none focus:outline-none"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                    />
                                    <Button
                                        className="rounded-full bg-[#00A699] hover:bg-[#008b80] h-10 w-10 p-0 ml-2"
                                        onClick={handleSendMessage}
                                    >
                                        <Send size={18} />
                                    </Button>
                                </div>
                                <p className="text-xs text-center text-gray-500 mt-2">
                                    Powered by advanced AI to help you plan the perfect Indian adventure
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}