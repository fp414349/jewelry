import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./productsSlice";
import Product from "./Product";
import SmallBasketList from "../basket/SmallBasketList";
import { addProductToBasket } from "../basket/basketSlice";
import { Button, Card, CardMedia } from "@mui/material";


const ListProducts = () => {
  let status = useSelector(state => state.products.status)
  let [flag, setFlag] = useState(false)
  let disp = useDispatch()
  useEffect(() => {
    if (status === "idle")
      disp(fetchAllProducts())
    console.log("end");
  }, [])
  //let inpRef=useRef(null);

  let arr = useSelector(state => state.products.productsArr)
  console.log(arr);




  function onClickAdd(item) {
    disp(addProductToBasket(item));
    setFlag(true);
    setTimeout(() => { setFlag(false) }, 3000)
  }

  return (<div>

    {arr && <ul>

      {arr.map(item => {
        return <li key={item.id}><Product itemToShow={item} add={onClickAdd}/>
          {/* <input type="button" value="הוסף לסל" onClick={() => { onClickAdd({ item }) }} /> */}
        

         
        </li>
      })}

    </ul>}
    {/* {arr&&<div>
      {arr.map(item=>{
        return (<Card key={item.id}>
               <CardMedia
               component="img"
               alt="green iguana"
               height="140"
               image="/static/images/cards/contemplative-reptile.jpg"/>
        </Card>)
      })}
      </div>} */}
       {flag && <SmallBasketList />}



  </div>);
}

export default ListProducts;
