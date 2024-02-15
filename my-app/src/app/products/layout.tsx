"use client";

import { signOut, useSession } from "next-auth/react";
//import type { Metadata } from 'next';
import React from 'react';
import { redirect } from 'next/navigation';

/* export const metadata: Metadata = {
    title: "Products",
    description: "access authorized"
}; */

export default function LayoutProducts({children}: {children: React.ReactNode}) {

    const {data: session} = useSession();
  
    //console.log(session,"data")
  
    if (!session) {
      redirect("/login")
    };

    return (
        <div>
            <button onClick={() => signOut()}
                className="absolute top-2 right-2 bg-slate-50 border border-slate-300 px-3 py-2 rounded shadow">
                Signout
            </button>
            
            {children}
        </div>
    )
}