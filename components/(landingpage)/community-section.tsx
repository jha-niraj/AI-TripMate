import { MessageSquare, ThumbsUp, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CommunityPost {
    id: string
    user: {
        name: string
        avatar: string
        initials: string
    }
    destination: string
    content: string
    likes: number
    comments: number
    image?: string
}

export function CommunitySection() {
    const communityPosts: CommunityPost[] = [
        {
            id: "1",
            user: {
                name: "Vikram Mehta",
                avatar: "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=",
                initials: "VM",
            },
            destination: "Rajasthan",
            content:
                "Just returned from an amazing 10-day trip across Rajasthan! The palaces in Udaipur were absolutely breathtaking. Has anyone visited the desert camps in Jaisalmer? Planning my next trip there!",
            likes: 42,
            comments: 15,
            image: "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU=",
        },
        {
            id: "2",
            user: {
                name: "Meera Patel",
                avatar: "https://media.istockphoto.com/id/1313502972/photo/portrait-of-beautiful-woman-having-fun.jpg?s=612x612&w=0&k=20&c=DHGWp3wIoSlpjK9xFdARpgpyo4t-hIzuqOSx5ZyRsHA=",
                initials: "MP",
            },
            destination: "Kerala",
            content:
                "The houseboat experience in Alleppey was so peaceful. I highly recommend visiting during monsoon season - everything is so green and the waterfalls are at their fullest!",
            likes: 38,
            comments: 7,
            image: "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg=",
        },
    ]

    return (
        <section className="py-24 w-full bg-gradient-to-b from-white to-[#F4F4F9]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Traveler Community</h2>
                        <p className="text-gray-600 max-w-2xl">
                            Connect with fellow travelers, share your experiences, and get authentic recommendations from people
                            who&apos;ve been there.
                        </p>
                    </div>
                    <Button className="mt-6 md:mt-0 bg-[#00A699] hover:bg-[#008b80]">
                        <Users className="mr-2 h-5 w-5" />
                        Join Community
                    </Button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {
                        communityPosts.map((post) => (
                            <Card key={post.id} className="overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="flex items-start mb-4">
                                        <Avatar className="h-12 w-12 mr-4">
                                            <AvatarImage src={post.user.avatar} alt={post.user.name} />
                                            <AvatarFallback>{post.user.initials}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-semibold">{post.user.name}</h4>
                                            <p className="text-sm text-gray-500">Traveled to {post.destination}</p>
                                        </div>
                                    </div>
                                    <p className="mb-4">{post.content}</p>
                                    {
                                        post.image && (
                                            <div className="mb-4 rounded-lg overflow-hidden">
                                                <Image
                                                    src={post.image || "/placeholder.svg"}
                                                    alt="Travel moment"
                                                    className="w-full h-64 object-cover"
                                                    height={40}
                                                    width={40}
                                                />
                                            </div>
                                        )
                                    }
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <button className="flex items-center mr-6 hover:text-[#00A699]">
                                            <ThumbsUp className="h-4 w-4 mr-1" />
                                            <span>{post.likes} Likes</span>
                                        </button>
                                        <button className="flex items-center hover:text-[#00A699]">
                                            <MessageSquare className="h-4 w-4 mr-1" />
                                            <span>{post.comments} Comments</span>
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
                <div className="text-center mt-10">
                    <p className="text-gray-600 mb-4">Join thousands of travelers sharing their experiences and tips</p>
                    <Button variant="outline" className="border-[#00A699] text-[#00A699] hover:bg-[#e6f7f6]">
                        View More Posts
                    </Button>
                </div>
            </div>
        </section>
    )
}