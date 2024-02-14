import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Products",
    description: "access authorized"
};

export default function LayoutBoardShop({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
        </div>
    )
}