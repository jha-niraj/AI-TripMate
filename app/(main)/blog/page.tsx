"use client"

import { useRouter } from 'next/navigation';
import Head from 'next/head';
import React from 'react';

export default function ComingSoon() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-teal-500 flex flex-col items-center justify-center text-white px-4">
            <Head>
                <title>Coming Soon - Travel & Tourism</title>
                <meta name="description" content="This feature is coming soon to enhance your travel experience" />
            </Head>
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">New Adventures Await</h1>
                <div className="mb-8">
                    <div className="text-2xl font-light mb-6">This feature is currently under development</div>
                    <p className="text-lg mb-4">
                        We&apos;re working on something extraordinary to enhance your travel experience.
                        Soon you&apos;ll be able to discover hidden gems, plan unforgettable journeys,
                        and connect with fellow travelers around the world.
                    </p>
                    <p className="text-lg">
                        Check back soon for an immersive travel planning experience that will
                        transform the way you explore our beautiful planet.
                    </p>
                </div>
                <div className="mt-10 animate-pulse">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="h-3 w-3 bg-white rounded-full mb-1"></div>
                        <div className="h-3 w-3 bg-white rounded-full mb-1"></div>
                        <div className="h-3 w-3 bg-white rounded-full"></div>
                    </div>
                </div>
                <button
                    onClick={() => router.push('/')}
                    className="mt-8 px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
                >
                    Return to Homepage
                </button>
            </div>
        </div>
    );
}