import { useSelector } from "react-redux"
import ProductSmallBasket from "./ProductSmallBasket"
import './SmallBasketList.css'

const SmallBasketList=()=>{
let arr=useSelector(state=>state.basket.basketArr)
let cnt=useSelector(state=>state.basket.totalCnt)
let sum=useSelector(state=>state.basket.totalSum)
    
return (
    <div className="smallBasket">
{arr&&<ul>
    {arr.map((item,index) => {return<li key={index}><ProductSmallBasket itemToShow={item}/></li>})}

</ul>}
<h3>סה"כ מחיר:{sum}</h3>
<h3>כמות מוצרים:{cnt}</h3>
</div>

);
}
export default SmallBasketList

//קישור לפופאפ 
//https://mui.com/material-ui/react-modal/#transitions
//קישור נוסף
//https://mui.com/material-ui/react-dialog/