import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      
      <Link href="/products" className="text-slate-50 font-bold bg-blue-500 cursor-pointer transition ease-in-out transform duration-200 
        hover:scale-105 hover:bg-blue-600 hover:shadow-lg active:bg-blue-400 active:scale-100 my-4 px-4 py-3 rounded">
        Go to products
      </Link>
      <legend className="italic">(you will be redirect to login)</legend>

    </div>
  )
}