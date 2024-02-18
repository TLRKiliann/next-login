"use client";

import React from 'react';
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';
import LogoutBtn from '@/app/components/products/LogoutBtn';
import Link from 'next/link';

export default function About() {
  const {data: session} = useSession();
  
  //console.log(session,"data")

  if (!session) {
    redirect("/login")
  };


  return (
    <div>
      <LogoutBtn />
      <h1 className='text-2xl p-4 mb-40'>
        About Page
      </h1>

      <div className='flex flex-col w-[200px] m-auto'>

        <div className='p-4'>
            <Link href="/products" className='btn-primary'>
              Go to Products
            </Link>
          </div>

          <div className='p-4'>
            <Link href="/products" className='btn-primary'>
              Go to Products
            </Link>
          </div>

          <div className='p-4'>
            <Link href="/products" className='btn-primary'>
              Go to Products
            </Link>
          </div>

      </div>

    </div>
  )
}
