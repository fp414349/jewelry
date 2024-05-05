import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/basket/basketSlice";
import productsSlice from "../features/products/productsSlice"
import usersSlice from "../features/users/usersSlice"
export const store=configureStore({
    reducer:{
        products:productsSlice,
        basket:basketSlice,
        users:usersSlice
    },
})