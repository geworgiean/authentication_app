"use server"

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    
    if (existingUser) {
        throw new Error("User already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });

    redirect("/login");
}