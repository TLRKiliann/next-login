"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Login() {

    const { data: session } = useSession();

    if (!session) {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <p className="text-2xl mb-2">
                    Not Signed In
                </p>
                <button className="text-slate-50 bg-blue-500 transition trasform duration-200 
                hover:scale-105 py-2 px-6 rounded-md hover:shadow-lg mb-2" 
                onClick={() => signIn('google')}
                >
                    Sign in with google
                </button>
                <button className="text-slate-900 border transition trasform duration-200 
                hover:scale-105 py-2 px-6 rounded-md hover:shadow-lg mb-2"
                onClick={() => signIn('github')}
                >
                    Sign in with github
                </button>
            </div>
        )
    } else {
        redirect("/products")
    }
}