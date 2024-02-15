import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      
      <h1>Main page that you can access without login</h1>
      <li className="text-slate-50 bg-blue-500 my-4 px-3 py-3 rounded">
        <Link href="/products">Go to products</Link>
      </li>
      <legend className="italic">(you will be redirect to login)</legend>
      
    </div>
  )
}