import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
const initialState = {
    // basketArr:[{  "id": 1,
    // "name": "חלב",
    // "description": "חלב מפוסטר 3%",
    // "imgUrl": "",
    // "content": "100 גרם",
    // "price": 5.2,
    // "isCooling": true,
    // "company": "טרה",
    // "prodDate": "10-10-2022",
    // "qty": 2}],
    basketArr: [],
    totalCnt: 0,
    totalSum: 0,
    show:false

}

const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addProductToBasket: (state, action) => {
            console.log(action.payload);
            let ind = state.basketArr.findIndex(item => item.id === action.payload.id)
            console.log(ind);
            if (ind === -1) {
                let prod = { ...action.payload, qty: 1 }
                console.log(prod);
                state.basketArr.push(prod)
            }
            else {
                state.basketArr[ind].qty = state.basketArr[ind].qty + 1
                console.log(state.basketArr[ind].qty);
            }
            state.totalCnt = state.totalCnt + 1
            state.totalSum = state.totalSum + action.payload.price

        },
        deleteProductFromBasket: (state, action) => {
            console.log(action.payload);
            let ind = state.basketArr.findIndex(item => item.id === action.payload.id)
            console.log(ind);
            if (ind != -1){
                //state.basketArr=[...state.basketArr.slice(ind, 1)]
                // let arr={...state.basketArr.slice(ind,1)}
                // console.log(arr);
                // state.basketArr=[...state.basketArr.slice(ind,1)]
                // console.log(state.basketArr);
               // state.card.filter((card) => card.id !== id)
                state.basketArr=state.basketArr.filter(item=>item.id!=action.payload.id)
                state.totalCnt = state.totalCnt - action.payload.qty
                state.totalSum = state.totalSum - (action.payload.price*action.payload.qty)
            }
        },
        increaseQty: (state, action) => {
            let ind = state.basketArr.findIndex(item => item.id === action.payload.id)
            if (ind != -1) {
                let x = state.basketArr[ind].qty
                state.basketArr[ind].qty = x + 1;
                console.log(state.basketArr[ind].qty)
                state.totalCnt = state.totalCnt + 1
                state.totalSum = state.totalSum + action.payload.price
            }
        },
        decreaseQty: (state, action) => {
            if (action.payload.qty === 1) {
               //deleteProductFromBasket(action.payload)
               return;
            }

            let ind = state.basketArr.findIndex(item => item.id === action.payload.id)
            if (ind != -1) {
                let x = state.basketArr[ind].qty
                state.basketArr[ind].qty = x - 1
                state.totalCnt = state.totalCnt - 1
                state.totalSum = state.totalSum - action.payload.price
            }
        }

    }

})
export const { addProductToBasket, decreaseQty, increaseQty, deleteProductFromBasket } = basketSlice.actions
export default basketSlice.reducer
