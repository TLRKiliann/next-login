import type { ProductsProps } from "@/app/lib/definitions";
import { products } from "@/app/lib/data";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export async function GET(request: Request, {params}: {params: {id: string}}) {
    if (parseInt(params.id) > products.length) {
        redirect('/products')
    };
    const findById = products.find(
        (product: ProductsProps) => product.id === parseInt(params.id)
    );
    return Response.json(findById);
};