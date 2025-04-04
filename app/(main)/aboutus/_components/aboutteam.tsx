import Image from "next/image"
import Link from "next/link"

export function AboutTeam() {
    const team = [
        {
            name: "Priya Sharma",
            role: "Founder & CEO",
            bio: "Former travel blogger with a passion for AI and technology. Priya founded AI Trip Mate after experiencing the challenges of planning complex trips across India.",
            image: "https://imgs.search.brave.com/ibsp4i0oEn5e1aN9jF8mQKmYaRTUiLZ46rj_CKntFB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg2LzQ3LzA5/LzM2MF9GXzI4NjQ3/MDk2NV92aWFITTZa/TmpyY3ZMRU5lMTR5/V1FGaTFqRW0yaktl/Vi5qcGc",
        },
        {
            name: "Rahul Mehta",
            role: "CTO",
            bio: "AI specialist with over 15 years of experience in machine learning and natural language processing. Rahul leads our technology development.",
            image: "https://imgs.search.brave.com/ibsp4i0oEn5e1aN9jF8mQKmYaRTUiLZ46rj_CKntFB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg2LzQ3LzA5/LzM2MF9GXzI4NjQ3/MDk2NV92aWFITTZa/TmpyY3ZMRU5lMTR5/V1FGaTFqRW0yaktl/Vi5qcGc",
        },
        {
            name: "Ananya Desai",
            role: "Head of Content",
            bio: "Travel writer and cultural expert who ensures our recommendations are authentic and respectful of local traditions.",
            image: "https://imgs.search.brave.com/ibsp4i0oEn5e1aN9jF8mQKmYaRTUiLZ46rj_CKntFB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg2LzQ3LzA5/LzM2MF9GXzI4NjQ3/MDk2NV92aWFITTZa/TmpyY3ZMRU5lMTR5/V1FGaTFqRW0yaktl/Vi5qcGc",
        },
        {
            name: "Vikram Singh",
            role: "Lead UX Designer",
            bio: "User experience specialist focused on making travel planning intuitive and enjoyable for everyone.",
            image: "https://imgs.search.brave.com/ibsp4i0oEn5e1aN9jF8mQKmYaRTUiLZ46rj_CKntFB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg2LzQ3LzA5/LzM2MF9GXzI4NjQ3/MDk2NV92aWFITTZa/TmpyY3ZMRU5lMTR5/V1FGaTFqRW0yaktl/Vi5qcGc",
        },
    ]

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
                    <p className="text-lg text-gray-600">
                        We&apos;re a diverse group of travel enthusiasts, AI specialists, and technology innovators united by our passion
                        for transforming the travel experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        team.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="mb-4 overflow-hidden rounded-full mx-auto w-48 h-48">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        height={40}
                                        width={40}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-[#00A699] mb-3">{member.role}</p>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-6">Join Our Team</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        We&apos;re always looking for passionate individuals to join our mission of transforming travel planning. If
                        you&apos;re excited about AI, travel, or creating exceptional user experiences, we&apos;d love to hear from you.
                    </p>
                    <Link
                        href="#"
                        className="inline-block bg-[#00A699] hover:bg-[#008b80] text-white font-medium py-3 px-6 rounded-lg"
                    >
                        View Open Positions
                    </Link>
                </div>
            </div>
        </section>
    )
}

