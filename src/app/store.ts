import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartReducer";

const store = configureStore({
    reducer: {
        cart : cartReducer
    }
})

export default store
export type rootState = ReturnType <typeof store.getState>
export type appDispatch = typeof store.dispatch