import axios from "axios";

export const getAllProducts = async () => {
    return await axios.get('http://localhost:4000/product');
}


export const iAddProductToServer = async (product) => {
    return await axios.post('http://localhost:4000/product', product);
}
export const deleteProductFromServer=async(product)=>{
    console.log("i api")
    console.log(product)
    return await axios.delete(`http://localhost:4000/product/${product.id}`);
}
export const updateProductInServer=async(product)=>{
    console.log(product)
    return await axios.put('http://localhost:4000/product/'+product.id,product);
}