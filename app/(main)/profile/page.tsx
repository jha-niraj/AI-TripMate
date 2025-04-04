import { Chatbot } from "@/components/chatbot"
import { UserProfile } from "./_components/userprofile"

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-white w-full">
            <main className="max-w-7xl mx-auto">
                <UserProfile />
            </main>
            <Chatbot />
        </div>
    )
}

