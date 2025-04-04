"use server";

import { FormData } from "@/app/(main)/contactus/page";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function submitContactForm(formData: FormData) {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (!formData.name || !formData.email || !formData.message) {
            throw new Error("All fields are required");
        }

        const contact = await prisma.contactMessage.create({
            data: {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                createdAt: new Date(),
            },
        });

        return { success: true, data: contact };
    } catch (error) {
        console.error("Error in contact form submission:", error);
        throw new Error("Failed to submit contact form. Please try again.");
    }
}