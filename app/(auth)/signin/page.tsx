"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

export default function LoginForm() {
    const { data: session, status } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const searchParams = useSearchParams();

    useEffect(() => {
        const error = searchParams.get('error');

        if (error === 'OAuthAccountNotLinked' || error === 'email-in-use') {
            toast("Email Already in Use", {
                description: "This email is already registered with a different sign-in method. Please use the original method to sign in.",
            });
        }
        console.log(session?.user?.roleExplicitlyChosen);
        if (status === "authenticated") {
            // if (!session?.user?.roleExplicitlyChosen) {
            //     router.push("/role-selection");
            // } 
            router.push("/");
        }
    }, [router, session, status, searchParams]);

    const handleSignInWithGoogle = async () => {
        try {
            await signIn("google");
        } catch (err: unknown) {
            console.error("Google sign-in error: ", err);
            toast("Error", {
                description: "An unexpected error occurred",
            });
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await signIn("credentials", {
                email, password,
                redirect: false,
                callbackUrl: "/"
            })

            if (response?.error) {
                let errorMessage;
                switch (response.error) {
                    case "CredentialsSignin":
                        errorMessage = "Invalid email or password";
                        break;
                    default:
                        errorMessage = "An unexpected error occurred";
                }
                toast(errorMessage);
            }
            if (response?.ok && !response?.error) {
                setIsSubmitting(false);
                toast("Logged in Successfully");
                router.push("/");
            }
        } catch (err) {
            console.log("Error Occurred while Signin: " + err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="max-w-xl mx-auto p-4 flex items-center justify-center h-screen">
            <Card className="shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
                    <p className="text-center text-gray-500">Sign in to your AI Trip Mate account</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="text-sm text-[#00A699] hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button type="submit" className="w-full bg-[#00A699] hover:bg-[#008b80]">
                            {
                                isSubmitting ? "Getting you in..." : "Log In"
                            }
                        </Button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" className="text-[#00A699] hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <Button variant="outline" onClick={handleSignInWithGoogle} className="w-full">
                            Google
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}