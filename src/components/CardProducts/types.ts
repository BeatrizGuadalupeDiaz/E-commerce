export interface Product {
    id: number;
    name: string;
    price: number;
}
export interface type{
    product: Product;
    setCart: any;
    cart: Product[];
}