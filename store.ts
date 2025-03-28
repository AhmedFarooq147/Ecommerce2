import { atomWithStorage } from "jotai/utils";

interface Product {
    slug: string;
    title: string;
    price: number;
    imageUrl: string;
    priceWithoutDiscount: number;
    description:string,
  }
export const cartAtom = atomWithStorage<Product[]>('cart',[])