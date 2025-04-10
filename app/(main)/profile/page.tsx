"use client"

import { Chatbot } from "@/components/chatbot"
import { UserProfile } from "./_components/userprofile"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status === "unauthenticated") {
            router.push("/signin");
        }
    }, [status, router]);

    return (
        <div className="min-h-screen bg-white w-full">
            <main className="max-w-7xl mx-auto">
                <UserProfile />
            </main>
            <Chatbot />
        </div>
    )
}

