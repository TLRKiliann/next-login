"use client";

import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import Image from "next/image";

export default function Home() {

  const { data: session } = useSession()

  if (session) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
        <Image
          src={session.user?.image as string}
          fill
          alt="img profile session"
          className="object-cover rounded-full"
        />
        </div>
        <p className="text-2xl mb-2">Welcome 
          <span className="font-bold">
            {session.user?.name}
          </span>. Signed In As</p>
        <p className="font-bold mb-4">
          {session.user?.email}
        </p>
        <button className="text-slate-50 bg-red-600/90 transition trasform duration-200 
          hover:scale-105 py-2 px-6 rounded-md hover:shadow-lg" 
          onClick={() => signOut()}>
          Sign out
        </button>
        <li className="text-xl font-bold text-sky-600 m-4">
          <Link href="/products">
            Go to products
          </Link>
        </li>
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-2xl mb-2">
          Not Signed In
        </p>
        <button className="text-slate-50 bg-blue-500 transition trasform duration-200 
          hover:scale-105 py-2 px-6 rounded-md hover:shadow-lg mb-2" 
          onClick={() => signIn('google')}
        >
          Sign in with google
        </button>
        <button className="text-slate-900 border transition trasform duration-200 
          hover:scale-105 py-2 px-6 rounded-md hover:shadow-lg mb-2"
          onClick={() => signIn('github')}
        >
          Sign in with github
        </button>
    </div>
  )
}