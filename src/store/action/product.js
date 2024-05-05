import axios from "axios"
import * as actionTypes from "../actionTypes";


export const saveAllProducts = (productarr) => {
    return {
        type: actionTypes.SAVE_PRODUCT,
        payload: productarr
    }
}

export const fetchAllProduct = () => {
    return (dispath, allstate) => {
        axios.get("http://localhost:4000/product")
            .then(res => {
                console.log(res)
                dispath(saveAllProducts(res.data))
            }).catch(er => {
                console.log(er)


            })
    }
}


// export const addProduct=(product)=>{
//   return{
//       type:actionTypes.ADD_PRODUCT,
//       payload:product
//   }
// }

// export const addProductToServer=()=>{
//     return (dispatch,allState)=>{
// axios.post("http://localhost:4000/product")
//  .then(res=>{
//      console.log(res)
//      dispatch(addProduct(product))

//  })
//    }
//}
