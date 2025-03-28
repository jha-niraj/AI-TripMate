import { Brain, Cpu, Database, Lock } from "lucide-react"

export function AboutTechnology() {
    return (
        <section className="py-16 bg-[#F4F4F9]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
                    <p className="text-lg text-gray-600">
                        AI Trip Mate leverages cutting-edge artificial intelligence to transform the travel planning experience.
                        Here&apos;s how our technology works behind the scenes to create personalized travel recommendations.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-start mb-4">
                            <div className="mr-4 bg-[#e6f7f6] p-3 rounded-full text-[#00A699]">
                                <Brain className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                                <p className="text-gray-600">
                                    Our AI understands your travel preferences through natural conversations. Simply tell our chatbot what
                                    you&apos;re looking for, and it will interpret your needs and provide tailored recommendations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-start mb-4">
                            <div className="mr-4 bg-[#e6f7f6] p-3 rounded-full text-[#00A699]">
                                <Database className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Vast Travel Database</h3>
                                <p className="text-gray-600">
                                    We&apos;ve compiled data from millions of travel reviews, local insights, and expert recommendations to
                                    create a comprehensive knowledge base that powers our recommendations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-start mb-4">
                            <div className="mr-4 bg-[#e6f7f6] p-3 rounded-full text-[#00A699]">
                                <Cpu className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Machine Learning Algorithms</h3>
                                <p className="text-gray-600">
                                    Our platform learns from user interactions and feedback to continuously improve recommendations. The
                                    more you use AI Trip Mate, the better it understands your travel preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-start mb-4">
                            <div className="mr-4 bg-[#e6f7f6] p-3 rounded-full text-[#00A699]">
                                <Lock className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Privacy and Security</h3>
                                <p className="text-gray-600">
                                    We prioritize the security of your data. All personal information is encrypted and protected, and
                                    we&apos;re transparent about how we use your data to improve our services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-6">The Future of AI in Travel</h3>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-600 mb-4">
                            We&apos;re constantly exploring new ways to enhance the travel experience through AI. From real-time
                            translation services to predictive recommendations based on weather patterns and local events, we&apos;re
                            committed to staying at the cutting edge of travel technology.
                        </p>
                        <p className="text-gray-600">
                            Our research team is currently developing features that will allow for even more personalized itineraries,
                            taking into account factors like your travel pace, interests, and even your mood.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

