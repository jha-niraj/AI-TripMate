import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers/providers";

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-space-grotesk',
})
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Define global metadata
export const metadata: Metadata = {
	title: {
		default: 'AI Trip Mate - Your Smart Travel Companion',
		template: '%s | AI Trip Mate',
	},
	description:
		'Discover AI Trip Mate, your intelligent travel companion for personalized trip planning, real-time recommendations, and seamless travel experiences.',
	keywords: [
		'AI tripmate',
		'AI travel companion',
		'travel planner AI',
		'smart travel app',
		'tourism AI',
		'trip planning tool',
	],
	authors: [{ name: 'Shunya Tech', url: 'https://thenexusgroups.in.net' }],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://thenexusgroups.in.net',
	},
};
export const viewport: Viewport = {
	themeColor: 'black'
}
const openGraph = {
	title: 'AI Trip Mate - Your Smart Travel Companion',
	description:
		'Plan your trips effortlessly with AI Trip Mate, offering personalized travel itineraries and real-time guidance.',
	url: 'https://aitripmate.in',
	siteName: 'AI Trip Mate',
	images: [
		{
			url: 'https://yourwebsite.com/og-image.jpg',
			width: 1200,
			height: 630,
			alt: 'AI Trip Mate Travel Companion',
		},
	],
	locale: 'en_US',
	type: 'website',
};

const twitter = {
	card: 'summary_large_image',
	title: 'AI Trip Mate - Your Smart Travel Companion',
	description:
		'Plan your trips effortlessly with AI Trip Mate, offering personalized travel itineraries and real-time guidance.',
	images: ['https://yourwebsite.com/og-image.jpg'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta property="og:title" content={openGraph.title} />
				<meta property="og:description" content={openGraph.description} />
				<meta property="og:url" content={openGraph.url} />
				<meta property="og:site_name" content={openGraph.siteName} />
				<meta property="og:image" content={openGraph.images[0].url} />
				<meta property="og:image:width" content={String(openGraph.images[0].width)} />
				<meta property="og:image:height" content={String(openGraph.images[0].height)} />
				<meta property="og:image:alt" content={openGraph.images[0].alt} />
				<meta property="og:locale" content={openGraph.locale} />
				<meta property="og:type" content={openGraph.type} />

				<meta name="twitter:card" content={twitter.card} />
				<meta name="twitter:title" content={twitter.title} />
				<meta name="twitter:description" content={twitter.description} />
				<meta name="twitter:image" content={twitter.images[0]} />

				<link rel="icon" href="/aitripmateicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

				<link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
			</head>
			<body className={`${spaceGrotesk.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<Toaster />
					{children}
				</Providers>
			</body>
		</html>
	);
}
