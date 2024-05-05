import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { decreaseQty, deleteProductFromBasket, increaseQty } from '../basket/basketSlice';
import Icon from '@mui/material/Icon';

const Icons=({item})=>{

let disp=useDispatch();


   return(<div>
       <IconButton onClick={()=>{disp(decreaseQty(item))}}>
       <Icon>-</Icon>

                </IconButton>
        <IconButton onClick={()=>{disp(deleteProductFromBasket(item))}}>
                <DeleteIcon />
                </IconButton>
                <IconButton onClick={()=>{disp(increaseQty(item))}}>
                <Icon>+</Icon>
                </IconButton>
                </div>);
}
export default Icons;