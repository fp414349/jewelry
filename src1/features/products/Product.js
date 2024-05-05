
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Product=({itemToShow,add})=>{


 return(
  
   
   
   
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={itemToShow.name}
            height="400"
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
              <Button onClick={()=>{add(itemToShow)}}>הוסף לסל</Button>
          </CardActions>
        </Card>
      );
    }
   // <div>
   //  <h1> {itemToShow.name}</h1>
   //  <img src={itemToShow.imgUrl} alt={itemToShow.name}/>
   //  <p>{itemToShow.description}</p>
   //  <p>{itemToShow.price}</p>
    
   //  </div>
 

export default Product;

