"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session, status } = useSession();
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        setSheetOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-black/50 backdrop-blur-md'
                : 'bg-black/30 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/aitripmateicon.png"
                        alt="MainLogo"
                        height={60}
                        width={60}
                        className="rounded-sm"
                        priority
                    />
                    <h1 className="text-xl font-semibold text-white drop-shadow-sm">AI TripMate</h1>
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-md font-medium text-white drop-shadow-sm hover:scale-110 transition-all duration-300">
                        Home
                    </Link>
                    <Link href="/aboutus" className="text-md font-medium text-white drop-shadow-sm hover:scale-110 transition-all duration-300">
                        About Us
                    </Link>
                    <Link href="/itenaryplanner" className="text-md font-medium text-white drop-shadow-sm hover:scale-110 transition-all duration-300">
                        Itenary Planner
                    </Link>
                    <Link href="/hotels" className="text-md font-medium text-white drop-shadow-sm hover:scale-110 transition-all duration-300">
                        Hotels
                    </Link>
                    <Link href="/aboutus#contact-section" className="text-md font-medium text-white drop-shadow-sm hover:scale-110 transition-all duration-300">
                        Contact
                    </Link>
                    <Link href="/blog" className="text-md font-medium text-white drop-shadow-sm hover:scale-110 transition-all duration-300">
                        Blog
                    </Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    {
                        status === "authenticated" ? (
                            <button className="rounded-full">
                                {
                                    session?.user?.image ? (
                                        <Image
                                            className="h-10 w-10 rounded-full border-2 border-white"
                                            src={session.user.image}
                                            alt={`Profile picture of ${session.user.name || 'user'}`}
                                            width={40}
                                            height={40}
                                            onClick={() => setSheetOpen(true)}
                                        />
                                    ) : (
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                                            <span className="text-gray-500 text-sm">
                                                {session?.user?.name?.[0] || 'U'}
                                            </span>
                                        </div>
                                    )
                                }
                            </button>
                        ) : (
                            <>
                                <Link href="/signup">
                                    <Button variant="outline" className="w-full hidden md:flex hover:scale-105 rounded-lg px-4 py-4 text-md bg-white/90 hover:bg-white text-black hover:shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] shadow-none transition-all duration-200">
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link href="/signin">
                                    <Button variant="outline" className="w-full hidden md:flex hover:scale-105 rounded-lg px-4 py-4 text-md bg-white/90 hover:bg-white text-black hover:shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] shadow-none transition-all duration-200">
                                        Sign In
                                    </Button>
                                </Link>
                            </>
                        )
                    }
                    <Button onClick={() => setSheetOpen(true)} variant="ghost" className="md:hidden text-white hover:bg-white/20">
                        <Menu size={40} />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetContent>
                    <nav className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center w-full gap-6 mb-6">
                            <Image
                                src="/aitripmateicon.png"
                                alt="MainLogo"
                                height={40}
                                width={40}
                                className="rounded-sm"
                                priority
                            />
                            <h1 className="text-xl font-semibold">AI TripMate</h1>
                        </Link>
                        <Link href="/" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Home
                        </Link>
                        <Link href="/aboutus" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            About Us
                        </Link>
                        <Link href="/itenaryplanner" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Itenary Planner
                        </Link>
                        <Link href="/hotels" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Hotels
                        </Link>
                        <Link href="/aboutus#contact-section" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Contact
                        </Link>
                        <Link href="/blog" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Blog
                        </Link>
                        <div className="space-y-4 mt-4">
                            {
                                status === "authenticated" ? (
                                    <div className="flex flex-col items-center gap-3 p-2 bg-gray-100 rounded-lg">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    {
                                                        session?.user?.image ? (
                                                            <Image
                                                                className="h-10 w-10 rounded-full"
                                                                src={session.user.image}
                                                                alt={`Profile of ${session.user.name || 'user'}`}
                                                                width={40}
                                                                height={40}
                                                            />
                                                        ) : (
                                                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                                                <span className="text-gray-700 text-sm font-medium">
                                                                    {session?.user?.name?.[0] || 'U'}
                                                                </span>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div>
                                                    <p className="font-medium">{session?.user?.name || 'User'}</p>
                                                    <p className="text-sm text-gray-500">{session?.user?.email || ''}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <Link href="/profile">
                                                    <Button>
                                                        Profile
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <Button onClick={() => signOut()}>
                                            Logout
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <Button asChild variant="outline" className="w-full" onClick={handleLinkClick}>
                                            <Link href="/signup">
                                                Sign Up
                                            </Link>
                                        </Button>
                                        <Button asChild variant="default" className="w-full" onClick={handleLinkClick}>
                                            <Link href="/signin">
                                                Sign In
                                            </Link>
                                        </Button>
                                    </>
                                )
                            }
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </nav>
    );
}