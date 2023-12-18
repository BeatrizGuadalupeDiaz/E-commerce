export interface Props {
    id: number;
    cart: Product[];
    product: Product;
}

export interface Product {
    id: number;
    name: string;
    price: number;
}
