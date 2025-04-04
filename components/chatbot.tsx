"use client"

import { useState, useEffect, useRef } from "react"
import { Send, X, Bot, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { toast } from "sonner"
import { processChatMessage } from "@/actions/chat.action"

interface ChatbotProps {
    destination?: string
}

// Define the Message type
interface Message {
    text: string;
    isUser: boolean;
    timestamp: number;
}

// Number of milliseconds in 5 days
const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

export function Chatbot({ destination }: ChatbotProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [hasWarning, setHasWarning] = useState(false)
    const messageEndRef = useRef<HTMLDivElement>(null)

    const initializeChat = () => {
        const welcomeMessage = {
            text: destination
                ? `Hi! How can I help you plan your stay in ${destination}?`
                : "Hi! I'm your AI Trip Mate. How can I help you plan your next adventure in India?",
            isUser: false,
            timestamp: new Date().getTime()
        }
        setMessages([welcomeMessage])
    }

    // Load messages from localStorage and clean up old conversations
    useEffect(() => {
        const storedData = localStorage.getItem("tripMateChatMessages")

        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData)

                // Check if the data has expired (older than 5 days)
                const currentTime = new Date().getTime()
                const lastMessageTime = Math.max(...parsedData.map((msg: Message) => msg.timestamp))

                if (currentTime - lastMessageTime > FIVE_DAYS_MS) {
                    // Data has expired, clear it
                    localStorage.removeItem("tripMateChatMessages")
                    initializeChat()
                } else {
                    // Data is still valid
                    setMessages(parsedData)
                }
            } catch (error) {
                console.error("Failed to parse stored messages:", error)
                initializeChat()
            }
        } else {
            initializeChat()
        }
    }, [destination, initializeChat])

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("tripMateChatMessages", JSON.stringify(messages))
        }
    }, [messages])

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

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return

        const userMessage: Message = {
            text: inputValue,
            isUser: true,
            timestamp: new Date().getTime()
        }

        setMessages(prev => [...prev, userMessage])
        setInputValue("")
        setIsLoading(true)

        try {
            // Prepare form data for server action - only send what's needed
            const formData = new FormData()
            formData.append("input", inputValue)
            if (destination) {
                formData.append("destination", destination)
            }

            // Call server action
            const response = await processChatMessage(formData)

            if (response.success) {
                const botMessage: Message = {
                    text: response.message!,
                    isUser: false,
                    timestamp: new Date().getTime()
                }
                setMessages(prev => [...prev, botMessage])

                // Handle warning flag
                if (response.warning) {
                    setHasWarning(true)
                }
            } else {
                // Handle error
                toast("Error", {
                    description: response.error || "Something went wrong. Please try again.",
                })

                // Add generic error message
                const errorMessage: Message = {
                    text: "I'm having trouble processing your request. Please try again later.",
                    isUser: false,
                    timestamp: new Date().getTime()
                }
                setMessages(prev => [...prev, errorMessage])
            }
        } catch (error) {
            console.error("Error sending message:", error)
            toast("Error", {
                description: "Failed to send your message. Please try again.",
            })

            // Add error message
            const errorMessage: Message = {
                text: "Something went wrong with our chat service. Please try again later.",
                isUser: false,
                timestamp: new Date().getTime()
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
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
                                    <p className="text-sm opacity-80">Your intelligent travel companion for India</p>
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
                                {/* Invisible div for auto-scrolling */}
                                <div ref={messageEndRef} />
                            </div>
                            <div className="border-t p-4">
                                {hasWarning && (
                                    <div className="mb-2 p-2 bg-yellow-50 text-yellow-800 text-xs rounded-lg">
                                        Please maintain respectful communication. Further inappropriate language may result in restricted access.
                                    </div>
                                )}
                                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                                    <Input
                                        type="text"
                                        placeholder="Ask me anything about your trip to India..."
                                        className="flex-1 bg-transparent border-none focus:outline-none"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSendMessage()}
                                        disabled={isLoading}
                                    />
                                    <Button
                                        className="rounded-full bg-[#00A699] hover:bg-[#008b80] h-10 w-10 p-0 ml-2"
                                        onClick={handleSendMessage}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <Loader2 size={18} className="animate-spin" />
                                        ) : (
                                            <Send size={18} />
                                        )}
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