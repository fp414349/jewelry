
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';



const Product=({itemToShow, add,deleteItem,updateItem})=>{
  let userRole= useSelector(st=>st.users.userRole)
  let disp=useDispatch();
 return(  
   <div style={{float:"left",marginLeft:"30px",marginTop:"10px"}}> 
        <Card sx={{ maxWidth:300}}>
          <CardMedia
            component="img"
            alt={itemToShow.name}
            height="300"
            image={itemToShow.imgUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {itemToShow.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {itemToShow.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {itemToShow.price}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
         { userRole==1&&<Button onClick={()=>{add(itemToShow)}}>הוסף לסל</Button>}
       { userRole==2&& <Button onClick={()=>{deleteItem(itemToShow)}}>מחק</Button>}
        { userRole==2&&<Button onClick={()=>{updateItem(itemToShow)}}>עדכן</Button>}

          </CardActions>
        </Card>
        </div>
      );
    }
   // <div>
   //  <h1> {itemToShow.name}</h1>
   //  <img src={itemToShow.imgUrl} alt={itemToShow.name}/>
   //  <p>{itemToShow.description}</p>
   //  <p>{itemToShow.price}</p>
    
   //  </div>
 

export default Product;

