import axios from "axios";

export const getAllProducts = async () => {
    return await axios.get('http://localhost:4000/product');
}


export const iAddProductToServer = async (product) => {
    return await axios.post('http://localhost:4000/product', product);
}
