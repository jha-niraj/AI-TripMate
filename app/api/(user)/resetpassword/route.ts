import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { auth } from "@/auth";

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const data = await req.json();
        const { currentPassword, newPassword } = data;

        console.log(currentPassword, newPassword);

        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email
            },
            include: {
                accounts: true
            }
        });

        console.log(user);

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Check if account is linked with Google
        const hasGoogleAccount = user.accounts.some(account => 
            account.provider === "google"
        );

        if (hasGoogleAccount) {
            return NextResponse.json(
                { error: "This account is linked with Google. Password reset is not available for Google accounts." },
                { status: 400 }
            );
        }

        // Verify current password
        if (!user.password) {
            return NextResponse.json(
                { error: "No password set for this account" },
                { status: 400 }
            );
        }

        const isValidPassword = await bcrypt.compare(currentPassword, user.password);
        if (!isValidPassword) {
            return NextResponse.json(
                { error: "Current password is incorrect" },
                { status: 400 }
            );
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password
        await prisma.user.update({
            where: {
                email: session.user.email
            },
            data: {
                password: hashedPassword
            }
        });

        return NextResponse.json(
            { message: "Password updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Password reset error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
