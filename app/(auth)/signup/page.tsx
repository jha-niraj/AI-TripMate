"use client"

import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const { status } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard");
        }
    }, [router, status]);

    const handleSignInGoogle = async () => {
        try {
            await signIn('google', { callbackUrl: '/' });
        } catch (err) {
            console.error('Google sign-in error:', err);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post("/api/register", {
                name,
                email,
                password
            });

            // if (response.status === 200) {
            //     toast("Registration successfull");
            //     router.push(`/waiting?email=${email}`);
            // }
            if (response.status === 200) {
                const result = await signIn("credentials", {
                    name,
                    email,
                    password,
                    redirect: false,
                });

                if (result?.error) {
                    console.error("Sign in error:", result.error);
                    toast("Authentication failed", {
                        description: result.error,
                    });
                } else {
                    toast("Success", {
                        description: "Logged in successfully",
                    });
                    router.push("/dashboard");
                }
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || "Registration failed";
                toast("Error", {
                    description: errorMessage,
                });
            } else {
                toast("Error", {
                    description: "An unexpected error occurred",
                });
            }
            console.error("Registration error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="max-w-xl mx-auto p-4 flex items-center justify-center h-screen">
            <Card className="shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Create an account</CardTitle>
                    <p className="text-center text-gray-500">Join AI Trip Mate to start planning your adventures</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                                id="fullName"
                                placeholder="John Doe"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-3">
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    placeholder="********"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    placeholder="********"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="terms"
                                checked={agreedToTerms}
                                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I agree to the{" "}
                                <Link href="/termsandservice" className="text-[#00A699] hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacypolicy" className="text-[#00A699] hover:underline">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>
                        <Button type="submit" className="w-full bg-[#00A699] hover:bg-[#008b80]" disabled={!agreedToTerms}>
                            {
                                isSubmitting ? "Signing Up..." : "Sign Up"
                            }
                        </Button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link href="/signin" className="text-[#00A699] hover:underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <Button variant="outline" onClick={handleSignInGoogle} className="w-full">
                            Google
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}