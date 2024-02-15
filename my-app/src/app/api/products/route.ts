import type { ProductsProps } from "@/app/lib/definitions";
import { products } from "@/app/lib/data";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filterComment = query
     ? products.filter((prod: ProductsProps) => prod.text?.includes(query))
     : products;
    return Response.json(filterComment);
};