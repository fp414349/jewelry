import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { act } from "@testing-library/react";
import { deleteProductFromServer, getAllProducts, iAddProductToServer, updateProductInServer } from "./productApi";



export const fetchAllProducts = createAsyncThunk(
    'productsInSlice/getAllProducts', async (thunkAPI) => {
        const response = await getAllProducts();
        console.log(response);
        return response.data;
    }
)

export const addProductToServer = createAsyncThunk(
    'productsInSlice/addProductToServer', async (product, thunkAPI) => {
        console.log(product);
        const response = await iAddProductToServer(product);
        return response.data
    }
)
export const deleteProduct = createAsyncThunk(
    'productsInSlice/deleteProduct', async (product, thunkAPI) => {
        console.log(product);
        const response = await deleteProductFromServer(product);
        return response.data
    }
)

export const updateProduct = createAsyncThunk(
    'productsInSlice/updateProduct', async (product, thunkAPI) => {
        const response = await updateProductInServer(product);
        return response.data;
    }
)

const initialState = {
    status: "idle",
    message: "",
    statusAdd: "idle",
    productsArr: []
}
const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
    
    },


    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.productsArr = action.payload
            state.status = "fulfilled"
        }).addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = "error";
            state.message = action.payload.message;
        }).addCase(fetchAllProducts.pending, (state, action) => {
            state.status = "pending"
        }).addCase(addProductToServer.fulfilled, (state, action) => {
            state.productsArr.push(action.payload)
            state.statusAdd = "fulfilled"
        }).addCase(addProductToServer.rejected, (state, action) => {
            state.statusAdd = "error";
            //state.message=action.payload.message
        }).addCase(addProductToServer.pending, (state, action) => {
            state.statusAdd = "pending"
        }).addCase(deleteProduct.fulfilled, (state, action) => {
            console.log(action.payload)
            // state.productsArr=fetchAllProducts();
            state.productsArr = action.payload;

        }).addCase(deleteProduct.rejected, (state, action) => {
        }).addCase(deleteProduct.pending, (state, action) => {
        }).addCase(updateProduct.fulfilled, (state, action) => {
            console.log(action.payload)
            // state.productsArr=fetchAllProducts();
            state.productsArr = action.payload;

        }).addCase(updateProduct.rejected, (state, action) => {
        }).addCase(updateProduct.pending, (state, action) => {
        })


    }
})
//export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;