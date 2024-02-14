import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Products",
    description: "access accepted"
};

export default function page() {
  return (
    <div>    
        <h1 className='text-2xl p-4'>
            Products
        </h1>

        <p className='text-xl p-4'>Outlet:</p>

    </div>
  )
}
