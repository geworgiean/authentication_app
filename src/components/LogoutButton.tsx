"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded-3xl font-semibold transition duration-300 shadow-lg active:scale-95"
        >
                Դուրս գալ
        </button>
    );
}