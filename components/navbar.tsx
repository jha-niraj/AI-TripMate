"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { ArrowRight, FileText, Menu, Route } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSession } from "next-auth/react";

interface ResourceItem {
    icon: React.ElementType
    title: string
    description: string
    href: string
}
const tools: ResourceItem[] = [
    {
        icon: FileText,
        title: "Budget Estimator",
        description: "Estimate budget of your products",
        href: "/budgetestimator"
    },
    {
        icon: Route,
        title: "NexInvoice",
        description: "NextGen Invoice",
        href: "/nexinvoice"
    }
]
const resources: ResourceItem[] = [
    {
        icon: FileText,
        title: "Products",
        description: "Our own products",
        href: "/products"
    },
    {
        icon: Route,
        title: "Client Projects",
        description: "Projects that we built for clients",
        href: "/clientprojects"
    }
]
export default function Navbar() {
    const { data: session, status } = useSession();
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);
    // const { toast } = useToast();
    // const router = useRouter();
    const [dropdownActive, setDropdownActive] = useState<boolean>(false);
    const [toolsDropdownActive, setToolsDropdownActive] = useState<boolean>(false);

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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    }
    const handleLinkClick = () => {
        setSheetOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 text-white transition-all duration-300 ${scrolled
            ? 'bg-black/30 backdrop-blur-md'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/shunyatech.png"
                        alt="MainLogo"
                        height={60}
                        width={60}
                        className="rounded-sm"
                    />
                    <h1 className="text-xl font-semibold">AI TripMate</h1>
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {/* <div
                        className="relative"
                        onMouseEnter={() => setDropdownActive(true)}
                        onMouseLeave={() => setDropdownActive(false)}
                    >
                        <button
                            className="flex items-center justify-center gap-3 rounded-md text-md font-medium transition duration-200"
                        >
                            Products
                        </button>
                        {
                            dropdownActive && (
                                <motion.div
                                    onMouseEnter={() => setDropdownActive(true)}
                                    onMouseLeave={() => setDropdownActive(false)}
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="absolute top-full left-0 w-[420px] min-w-max z-50 shadow-lg rounded-lg z-100"
                                >
                                    <div className="absolute top-full left-0 w-full max-w-md pt-2 space-y-1 z-50">
                                        {
                                            resources.map((resource, index) => (
                                                <motion.div
                                                    key={index}
                                                    variants={item}
                                                    className="w-full bg-black dark:bg-white rounded-2xl"
                                                    onClick={() => setDropdownActive(false)}
                                                >
                                                    <Link
                                                        href={resource.href}
                                                        target={`${resource.title === "Sessions" || resource.title === "VicharSpace" ? "_blank" : ""}`}
                                                        className="group relative overflow-hidden cursor-pointer border-none shadow-sm transition-all hover:shadow-md h-full"
                                                    >
                                                        <Card className="flex text-black dark:text-white flex-row items-center justify-center gap-4 p-4 h-full">
                                                            <div className="rounded-lg">
                                                                <resource.icon className="h-5 w-5" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h3 className="font-semibold">
                                                                    {resource.title}
                                                                </h3>
                                                                <p className="text-xs">
                                                                    {resource.description}
                                                                </p>
                                                            </div>
                                                            <ArrowRight className="h-5 w-5 transform opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                                        </Card>
                                                    </Link>
                                                </motion.div>
                                            ))
                                        }
                                    </div>
                                </motion.div>
                            )
                        }
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setToolsDropdownActive(true)}
                        onMouseLeave={() => setToolsDropdownActive(false)}
                    >
                        <button
                            className="flex items-center justify-center gap-3 rounded-md text-md font-medium transition duration-200"
                        >
                            Tools
                        </button>
                        {
                            toolsDropdownActive && (
                                <motion.div
                                    onMouseEnter={() => setToolsDropdownActive(true)}
                                    onMouseLeave={() => setToolsDropdownActive(false)}
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="absolute top-full left-0 w-[420px] min-w-max z-50 shadow-lg rounded-lg z-100"
                                >
                                    <div className="absolute top-full left-0 w-full max-w-md pt-2 space-y-1 z-50">
                                        {
                                            tools.map((tool, index) => (
                                                <motion.div
                                                    key={index}
                                                    variants={item}
                                                    className="w-full bg-black dark:bg-white rounded-2xl"
                                                    onClick={() => setToolsDropdownActive(false)}
                                                >
                                                    <Link
                                                        href={tool.href}
                                                        target={`${tool.title === "Sessions" || tool.title === "VicharSpace" ? "_blank" : ""}`}
                                                        className="group relative overflow-hidden cursor-pointer border-none shadow-sm transition-all hover:shadow-md h-full"
                                                    >
                                                        <Card className="flex text-black dark:text-white flex-row items-center justify-center gap-4 p-4 h-full">
                                                            <div className="rounded-lg">
                                                                <tool.icon className="h-5 w-5" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h3 className="font-semibold">
                                                                    {tool.title}
                                                                </h3>
                                                                <p className="text-xs">
                                                                    {tool.description}
                                                                </p>
                                                            </div>
                                                            <ArrowRight className="h-5 w-5 transform opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                                        </Card>
                                                    </Link>
                                                </motion.div>
                                            ))
                                        }
                                    </div>
                                </motion.div>
                            )
                        }
                    </div> */}
                    <Link href="#whyus" className="text-md font-medium hover:scale-110 transition-all duration-300">
                        Home
                    </Link>
                    <Link href="#approach" className="text-md font-medium hover:scale-110 transition-all duration-300">
                        About Us
                    </Link>
                    <Link href="#faqs" className="text-md font-medium hover:scale-110 transition-all duration-300">
                        Itenary Planner
                    </Link>
                    <Link href="#pricingsection" className="text-md font-medium hover:scale-110 transition-all duration-300">
                        Contact
                    </Link>
                    <Link href="#" className="text-md font-medium hover:scale-110 transition-all duration-300">
                        Blog
                    </Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    {/* <div className="flex items-center justify-center">
                        {
                            theme === "light" ? (
                                <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
                                    <Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`} />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            ) : (
                                <Button onClick={() => setTheme("light")} variant="outline" size="icon">
                                    <Moon className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`} />
                                </Button>
                            )
                        }
                    </div> */}
                    {
                        status === "authenticated" ? (
                            <button className="rounded-full">
                                {
                                    session?.user?.image ? (
                                        <Image
                                            className="h-10 w-10 rounded-full"
                                            src={session.user.image}
                                            alt={`Profile picture of ${session.user.name || 'user'}`}
                                            width={40}
                                            height={40}
                                            onClick={() => setSheetOpen(true)}
                                        />
                                    ) : (
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
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
                                    <Button variant="outline" className="w-full hidden md:flex hover:scale-105 rounded-lg px-4 py-4 text-md bg-white hover:bg-white text-black hover:shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] shadow-none transition-all duration-200">
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button variant="outline" className="w-full hidden md:flex hover:scale-105 rounded-lg px-4 py-4 text-md bg-white hover:bg-white text-black hover:shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] shadow-none transition-all duration-200">
                                        Sign In
                                    </Button>
                                </Link>
                            </>
                        )
                    }
                    <Button onClick={() => setSheetOpen(true)} variant="ghost" className="md:hidden">
                        <Menu size={40} />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetContent>
                    <nav className="flex flex-col gap-6">
                        <Link href="/" className="text-xl font-semibold hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Home
                        </Link>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="products">
                                <AccordionTrigger>Products</AccordionTrigger>
                                <AccordionContent>
                                    {
                                        resources.map((resource, index) => (
                                            <Link key={index} href={resource.href} className="block py-2 text-md hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                                                {resource.title}
                                            </Link>
                                        ))
                                    }
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="tools">
                                <AccordionTrigger>Tools</AccordionTrigger>
                                <AccordionContent>
                                    {
                                        tools.map((tool, index) => (
                                            <Link key={index} href={tool.href} className="block py-2 text-md hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                                                {tool.title}
                                            </Link>
                                        ))
                                    }
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Link href="#whyus" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Why Us
                        </Link>
                        <Link href="#approach" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Approach
                        </Link>
                        <Link href="#faqs" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            FAQ&apos;s
                        </Link>
                        <Link href="#pricingsection" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Pricing
                        </Link>
                        <Link href="#" className="text-xl hover:text-gray-600 transition-colors" onClick={handleLinkClick}>
                            Blog
                        </Link>
                        <div className="space-y-4 mt-4">
                            {/* <Button asChild variant="outline" className="w-full" onClick={handleLinkClick}>
                                <Link href="/accelerator">Join the Accelerator</Link>
                            </Button> */}
                            <Button asChild variant="default" className="w-full" onClick={handleLinkClick}>
                                <Link href="https://cal.com/shunyatech/15min" target="_blank">
                                    Book a 15 min call
                                </Link>
                            </Button>
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </nav>
    );
}