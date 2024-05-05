import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts ,deleteProduct, updateProduct} from "./productsSlice";
import Product from "./Product";
import SmallBasketList from "../basket/SmallBasketList";
import { addProductToBasket } from "../basket/basketSlice";
import { Button, Card, CardMedia } from "@mui/material";
import Small from "../basket/Small"
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useNavigate } from "react-router-dom";


const ListProducts = () => {
  // let status = useSelector(state => state.products.status)
  //let [flag, setFlag] = useState(false)
  let disp = useDispatch()
  
  let [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  let nevigation=useNavigate();
//   let status = useSelector(state => state.users.user.status)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    // if (status === "idle")
      disp(fetchAllProducts())
    console.log("end");

  }, [])
  //let inpRef=useRef(null);

  let arr = useSelector(state => state.products.productsArr)

  console.log(arr);
  function onClickAdd(item) {
    disp(addProductToBasket(item));
    handleClickOpen();
    setShow(true);
    setTimeout(() => { setShow(false) }, 3000)
  }
  let deleteProductFromArr=(item)=>{
    disp(deleteProduct(item))
}
let updateProductInArr=(item)=>{
    nevigation('/update',{state:item});
    
}
  return (<>
{arr &&arr.map(item => {
  return <div key={item.id}><Product itemToShow={item} add={onClickAdd}
   deleteItem={deleteProductFromArr} updateItem={updateProductInArr}/>   
  </div>
})
}

       {show&&<Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"my basket"}</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
         <SmallBasketList/>
        </DialogContentText>
      </DialogContent>
      <DialogActions>


      </DialogActions>
    </Dialog>}
  </>
  );



  ;
}

export default ListProducts;
