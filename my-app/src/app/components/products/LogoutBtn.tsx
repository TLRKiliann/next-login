"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutBtn() {

    const router = useRouter();

    const handleSignOut = () => {
        router.push("/logout")
    };

    return (
        <div>
            <button onClick={handleSignOut}
                className="absolute top-2 right-2 bg-slate-50 border border-slate-300 transition ease-in-out 
                transform duration-100 hover:scale-105 hover:bg-slate-100 hover:shadow
                
                px-3 py-2 rounded"
            >
                Signout
            </button>
        </div>
    )
}
