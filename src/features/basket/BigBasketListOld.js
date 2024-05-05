
import { useDispatch } from "react-redux"
import { decreaseQty, deleteProductFromBasket, increaseQty } from "./basketSlice";
import ProductBigBasket from "./ProductBigBasket"
import { useSelector } from "react-redux";


    const BigBasketList=()=>{
    let arr=useSelector(state=>state.basket.basketArr)
    let cnt=useSelector(state=>state.basket.totalCnt)
    let sum=useSelector(state=>state.basket.totalSum)
    let disp=useDispatch();    
    console.log(sum);
return (<>
    {arr&&<ul>
    {arr.map((item,index) => {return<li key={index}>
        <ProductBigBasket prodToShow={item}/>
        <input type="button" onClick={()=>{disp(increaseQty(item))}} value="+" />
        <input type="button" value="-" onClick={()=>{
            disp(decreaseQty(item))
        }}/>
        <input type="button" value="הסר" onClick={()=>{
            disp(deleteProductFromBasket(item))
        }}/>
    </li>})}

</ul>}
<h3>מחיר סך הכל:{sum}</h3>
<h3>כמות מוצרים:{cnt}</h3>
</>
);
}
export default BigBasketList

//קישור למחיקת מוצרים מהסל
//https://mui.com/material-ui/transitions/