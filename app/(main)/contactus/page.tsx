"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/actions/user.action";

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

export default function ContactPage() {
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
        <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        We&apos;d love to hear from you! Whether you have a question about our tours,
                        need help planning your trip, or want to share your travel experiences,
                        our team is here to assist you.
                    </p>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Company Details</h3>
                            <div className="mt-3 text-gray-600">
                                <p className="font-medium">Wanderlust Travels</p>
                                <p>123 Adventure Avenue</p>
                                <p>Exploration District</p>
                                <p>Travel City, TC 54321</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Contact Info</h3>
                            <div className="mt-3 text-gray-600">
                                <p>Email: info@wanderlust-travels.com</p>
                                <p>Phone: +1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
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
                            {
                                errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
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
                        </div>
                    </form>
                </div>
            </div>
            {
                showSuccess && (
                    <SuccessDialog onClose={() => setShowSuccess(false)} onReturn={() => router.push("/")} />
                )
            }
        </div>
    );
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