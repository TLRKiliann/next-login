import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      
      <Link href="/products" className="btn-primary mb-4">
        Go to products
      </Link>

      <Link href="/about" className="btn-primary mb-4">
        Go to about
      </Link>

      <legend className="italic">(you will be redirect to login)</legend>

    </div>
  )
}