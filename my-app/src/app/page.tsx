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

      <legend className="text-slate-700 italic">(Anyway, you will be redirected to login)</legend>

      <Link href="/contact" className="btn-secondary mt-4 mb-4">
        Go to contact
      </Link>

      <legend className="text-slate-700 italic">(You will not be redirected to login)</legend>

    </div>
  )
}