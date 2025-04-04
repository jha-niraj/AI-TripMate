import { Chatbot } from "@/components/chatbot"
import { UserDashboard } from "./_components/userdashboard"

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="py-8">
                <UserDashboard />
            </main>
            <Chatbot />
        </div>
    )
}

