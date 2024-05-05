import * as actionTypes from "../actionTypes";
const initialState = {
    productArr:[ { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
],
    }   
       
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
         case actionTypes.SAVE_PRODUCT:
            return {
            ...state,
            productArr: action.payload
            }
        }
        return state;
    }