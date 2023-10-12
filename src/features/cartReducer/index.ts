import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { products } from "../../test";
import { Product } from "../../components/CardProducts/types";

interface Props {
    product: Product[];
}

const initialState: Props = {
    product: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<Product>) => {
            state.product = [...state.product, action.payload];
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            const index = state.product.findIndex(
                (product) => product.id === action.payload
            );
            if(index === -1){
                alert('este producto no se encuentra')
                return
            }
            state.product.splice(index,1)
        },
    },
});

export const { setCart, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
