export interface Props {
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    cart: Product[];
}

export interface Product {
    id: number;
    name: string;
    price: number;
}