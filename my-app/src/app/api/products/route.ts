import { products } from '@/app/lib/data';

export async function GET(request: Request) {
    return Response.json(products);
};