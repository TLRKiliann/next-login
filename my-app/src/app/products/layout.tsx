import type { Metadata } from 'next';
import React from 'react';
import LogoutBtn from "../components/products/LogoutBtn";

export const metadata: Metadata = {
    title: "Products",
    description: "access authorized"
};

export default async function LayoutProducts({children}: {children: React.ReactNode}) {

    return (
        <div>
        <LogoutBtn />
            {children}
        </div>
    )
}