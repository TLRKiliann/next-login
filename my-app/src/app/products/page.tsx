"use client";

import type { ProductsProps } from '../lib/definitions';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Products() {
  
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
    throw new Error("Some trouble with products")
  };

  return (
    <div>
        
        <h1 className='text-2xl p-4'>
            Products Page
        </h1>

        {products.map((prod: ProductsProps) => (
          <div key={prod.id} className="w-1/5 m-auto mt-10">
            <Link href={`/products/${prod.id}`}>Product: {prod.productName}</Link>
            <p>Price: {prod.price}</p>
            <p>Stock: {prod.stock}</p>
            <p>Ref: {prod.ref}</p>
            <hr className="my-4" />
          </div>
        ))}
    </div>
  )
}
