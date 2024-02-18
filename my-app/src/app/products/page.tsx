"use client";

import type { ProductsProps } from '../lib/definitions';
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Products() {
  
  const {data: session} = useSession();
  
  //console.log(session,"data")

  if (!session) {
    redirect("/login")
  };

  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    const callerProd = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data)
    }
    callerProd();
    return () => console.log("clean-up products")
  }, [])

  if (products.length > 3) {
    throw new Error("Products greater than list of products !")
  };

  return (
    <div>
        
        <h1 className='text-2xl p-4 mb-10'>
          Products Page
        </h1>

        <div className='p-4'>
          <Link href="/" className='btn-primary'>
            Go to home
          </Link>
        </div>
        <div className='p-4'>
          <Link href="/about" className='btn-primary'>
            Go to about
          </Link>
        </div>
        <div className='p-4'>
          <Link href="/contact" className='btn-primary'>
            Go to contact
          </Link>
        </div>


        {products.map((prod: ProductsProps) => (
          <div key={prod.id} className="w-1/5 m-auto">
            <Link href={`/products/${prod.id}`}
              className="text-blue-600 hover:text-blue-700 active:text-blue-500"
            >
              Product: {prod.productName}
            </Link>
            <p>Price: {prod.price}</p>
            <p>Stock: {prod.stock}</p>
            <p>Ref: {prod.ref}</p>
            <hr className="my-4" />
          </div>
        ))}
    </div>
  )
}
