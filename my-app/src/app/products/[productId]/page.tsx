"use client";

import type { ProductsProps } from '@/app/lib/definitions';
import React, { useState, useEffect } from 'react'

export default function ProductById({params}: {params: {id: string}}) {

    const [dataProdId, setDataProdId] = useState<ProductsProps[]>([]);

    useEffect(() => {
        const caller = async () => {
            const res = await fetch(`/api/products/${params.id}`)
            const data = await res.json();
            //console.log(data)
            setDataProdId(data)
        }
        caller();
        return () => console.log("clean-up !")
    }, [])

    return (
        <div>

            {dataProdId.map((prod: ProductsProps) => (
                <div>
                    <p>Product: {prod.productName}</p>
                    <p>Price: {prod.price}</p>
                    <p>Stock: {prod.stock}</p>
                    <p>Ref: {prod.ref}</p>
                </div>
            ))}

        </div>
    )
}
