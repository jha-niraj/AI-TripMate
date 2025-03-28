import { Chatbot } from "@/components/chatbot";
import { AboutContact } from "./_components/aboutcontact";
import { AboutHero } from "./_components/abouthero";
import { AboutMission } from "./_components/aboutmission";
import { AboutTeam } from "./_components/aboutteam";
import { AboutTechnology } from "./_components/abouttechnology";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                <AboutHero />
                <AboutMission />
                <AboutTechnology />
                <AboutTeam />
                <AboutContact />
            </main>
            <Chatbot />
        </div>
    )
}

