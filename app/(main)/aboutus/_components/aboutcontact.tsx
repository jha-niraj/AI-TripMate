"use client"

import { Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { submitContactForm } from "@/actions/user.action"
import { useState } from "react"
import { useRouter } from "next/navigation"

export interface FormData {
    name: string;
    email: string;
    message: string;
}
interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}
interface SuccessDialogProps {
    onClose: () => void;
    onReturn: () => void;
}
export function AboutContact() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            await submitContactForm(formData);
            setFormData({ name: "", email: "", message: "" });
            setShowSuccess(true);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-section" className="py-16 bg-[#F4F4F9]">
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
                        Have questions, feedback, or partnership opportunities? We&apos;d love to hear from you.
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
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Name
                                            </label>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 ${errors.name ? "border-red-500" : "border-gray-300"
                                                    }`}
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 ${errors.email ? "border-red-500" : "border-gray-300"
                                                    }`}
                                                placeholder="your.email@example.com"
                                            />
                                            {
                                                errors.email && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 ${errors.message ? "border-red-500" : "border-gray-300"
                                                }`}
                                            placeholder="How can we help you?"
                                        />
                                        {
                                            errors.message && (
                                                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                            )
                                        }
                                    </div>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
                                        >
                                            {
                                                isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    "Send Message"
                                                )
                                            }
                                        </button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                        {
                            showSuccess && (
                                <SuccessDialog onClose={() => setShowSuccess(false)} onReturn={() => router.push("/")} />
                            )
                        }
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
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-medium mb-3">Follow Us</h4>
                                    <div className="flex space-x-4">
                                        {
                                            ["facebook", "instagram", "twitter", "linkedin"].map((social, index) => (
                                                <motion.a
                                                    key={index}
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
function SuccessDialog({ onClose, onReturn }: SuccessDialogProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                        <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                        Thank you for reaching out to us. We&apos;ve received your message and will get back to you as soon as possible.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
                        <button
                            onClick={onReturn}
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Return to Homepage
                        </button>
                        <button
                            onClick={onClose}
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}