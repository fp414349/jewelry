import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllProducts, iAddProductToServer } from "./productApi";



export const fetchAllProducts = createAsyncThunk(
    'productsInSlice/getAllProducts', async (thunkAPI) => {
        const response = await getAllProducts();
        console.log(response);
        return response.data;
    }
)

export const addProductToServer=createAsyncThunk(
    'productsInSlice/addProductToServer',async(product,thunkAPI)=>{
        console.log(product);
        const response=await iAddProductToServer(product);
        return response.data
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
        // addProduct: {
        //     reducer: (state, action) => {
        //         action.payload.id = state.productsArr[state.productsArr.length - 1].id + 1;
        //         console.log(action.payload);
        //         state.productsArr.push(action.payload)
        //         axios.post("http://localhost:4000/product/", action.payload)
        //         console.log(state.productsArr);
        //     },
        //}
    },

   
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            // Add user to the state array
            state.productsArr = action.payload
            state.status = "fulfilled"
        }).addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = "error";
            state.message = action.payload.message;


        }).addCase(fetchAllProducts.pending, (state, action) => {
            state.status = "pending"

        }).addCase(addProductToServer.fulfilled,(state, action)=>{
            state.productsArr.push(action.payload)
            state.statusAdd="fulfilled"
        }).addCase(addProductToServer.rejected,(state,action)=>{
            state.statusAdd="error";
            //state.message=action.payload.message
        }).addCase(addProductToServer.pending,(state,action)=>{
            state.statusAdd="pending"
        })


    }
})
//export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;