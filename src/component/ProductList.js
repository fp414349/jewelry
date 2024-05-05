import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {fetchAllProduct,saveAllProducts}from "../store/action/product"
import Product from "./Product";
const ProductList = () => {
    let myDisp = useDispatch();
    useEffect(() => {
        myDisp(fetchAllProduct())
    }, [])
    let arr = useSelector(st => st.product.productArr)

    return ( <>
    <h1>hellow</h1>
        {arr&&<ul>
       {arr.map(item => <li key={item.id}  ><Product item_to_show={item}/></li>)}
    </ul>}
    </>);

}
export default ProductList;