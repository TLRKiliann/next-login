"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import type { ProductsProps } from '../lib/definitions';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function page() {

  const [products, setProducts] = useState<ProductsProps[]>([]);

  const {data: session} = useSession();
  
  console.log(session,"data")
  
  if (!session) {
    redirect("/")
  } else {
    console.log("login ok, but it's not best practice")
  };

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
    throw new Error("Some trouble with products")
  }

  return (
    <div>    
        <h1 className='text-2xl p-4'>
            Products Page
        </h1>

        {products.map((prod: ProductsProps) => (
          <div key={prod.id}>
            <Link href={`/products/${prod.id}`}>Product: {prod.productName}</Link>
            <p>Price: {prod.price}</p>
            <p>Stock: {prod.stock}</p>
            <p>Ref: {prod.ref}</p>
            <hr />
          </div>
        ))}

    </div>
  )
}
