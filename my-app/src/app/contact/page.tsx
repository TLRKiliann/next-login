import React from 'react'
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div>
            <h1 className='text-2xl p-4 mb-40'>
                Contact
            </h1>

            <div className="flex flex-col items-center justify-center m-auto px-2">
                
                <div className='mt-10'>
                    <Link href="/products" className="btn-primary mb-4">
                        Go to products
                    </Link>
                </div>

                <div className='mt-10'>
                    <Link href="/about" className="btn-primary mb-4">
                        Go to about
                    </Link>
                </div>

                <div className='mt-10'>
                    <Link href="/" className="btn-primary mb-4">
                        Go to home
                    </Link>
                </div>
            </div>           

        </div>
    )
}
