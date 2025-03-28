import { CommunitySection } from "@/components/(landingpage)/community-section"
import { CtaSection } from "@/components/(landingpage)/cta-section"
import { FeaturesSection } from "@/components/(landingpage)/features-section"
import { HeroSection } from "@/components/(landingpage)/hero-section"
import { HowItWorks } from "@/components/(landingpage)/howitworks"
import { PopularDestinations } from "@/components/(landingpage)/populardestinations"
import { TestimonialsSection } from "@/components/(landingpage)/testimonials-section"
import { TravelBlog } from "@/components/(landingpage)/travelblog"
import { TravelPackages } from "@/components/(landingpage)/travelpackages"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
	return (
		<div className="min-h-screen w-full bg-white">
			<Navbar />
			<main className="w-full">
				<HeroSection />
				<PopularDestinations />
				<FeaturesSection />
				<TravelPackages />
				<TestimonialsSection />
				<HowItWorks />
				<TravelBlog />
				<CommunitySection />
				<CtaSection />
			</main>
			<Footer />
			<Chatbot />
		</div>
	)
}