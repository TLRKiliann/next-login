"use client";

import { useSession } from "next-auth/react";
import type { ProductsProps } from '@/app/lib/definitions';
import React, { useState, useEffect } from 'react'
import { redirect } from "next/navigation";

export default function ProductById({params}: {params: {productId: string}}) {

    const {data: session} = useSession();
    //console.log(session, "session");
  
    if (!session) {
      redirect("/login")
    };

    if (parseInt(params.productId) > 3) {
        throw new Error("Some trouble with products")
    };

    //console.log(params, "params");

   const [dataProdId, setDataProdId] = useState<ProductsProps|null>(null);

    useEffect(() => {
        const caller = async () => {
            const res = await fetch(`/api/products/${params.productId}`)
            const data = await res.json();
            console.log(data, "data")
            setDataProdId(data)
        }
        caller();
        return () => console.log("clean-up !")
    }, [params.productId])

    return (
        <div>

            <div>
                <p>Product: {dataProdId?.productName}</p>
                <p>Price: {dataProdId?.price}</p>
                <p>Stock: {dataProdId?.stock}</p>
                <p>Ref: {dataProdId?.ref}</p>
            </div>

        </div>
    )
}
