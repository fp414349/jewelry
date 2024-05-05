import { useDispatch, useSelector } from "react-redux";
import { addSongToBasket } from '../basket/basketSlice'
// import { Popover } from 'react-tiny-popover'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SmallBasketList from "./SmallBasketList";

// import React, { useState } from 'react';
import { useState } from "react";
// import Button from '@mui/material/Button';
import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';





const Small = () => {
  // let [flagInterval,setflagInterval]=useState(false);
  let disp = useDispatch();
  let [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
//   let status = useSelector(state => state.users.user.status)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let add = () => {
    handleClickOpen();
    setShow(true);
    setTimeout(() => { setShow(false) }, 2000);
  }







  //     return ( <>   
  //         <ImageListItem key={song.songId}>
  //           <img
  //             src={`${song.img}?w=164&h=164&fit=crop&auto=format`}
  //             srcSet={`${song.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
  //             alt={song.title}
  //             loading="lazy"
  //           />  
  //           <ImageListItemBar
  //           title={song.title}
  //           subtitle={<span>: {song.body}</span>}
  //           position="below"
  //         />

  //         <Popover
  //       isOpen={flagInterval}
  //       positions={['top']} // 
  //       content={<div><SmallBasket/></div>} >
  //      <Button variant="outlined"  color="secondary" onClick={() => { add(); { disp(addSongToBasket(song))}}}>add me to the cart </Button></Popover>
  //      </ImageListItem> 
  //      {flagInterval&&<SmallBasket/>}</>

  //      );
  // }

  // 

  return (<>
 
    {<Dialog
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
}
export default Small;