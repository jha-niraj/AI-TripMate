import { Suspense } from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section className="min-h-screen w-full">
                {children}
            </section>
        </Suspense>
    )
}