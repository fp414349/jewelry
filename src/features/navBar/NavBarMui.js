import React from "react";
//import {
//     AppBar,
//     Toolbar,
//     CssBaseline,
//     Typography,
//     makeStyles,
//   } from "@material-ui/core";
  import { Link } from "react-router-dom";
import { AppBar,Toolbar,CssBaseline,Typography,makeStyles } from "@mui/material";
import './NavbarMui.scss';

const NavBarMui = () => {
    
    return ( 
    
    <AppBar background-color="black" position="fixed" margin-top="0px" overflow="hidden" className="appBar">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className="logo">
          <Link to="home" className="logo">
            Swarovski
            </Link>
          </Typography>
            <div className="navlinks">
             
              <Link to="home" className="link">
                לדף הבית
              </Link>
              <Link to="products" className="link">
               למוצרים שלנו  
              </Link>
              <Link to="basket" className="link">
                לסל הקניות 
              </Link>
              <Link to="addProduct" className="link">
              להוספת מוצר
              </Link>
            </div>
        </Toolbar>
      </AppBar>
    );

}
export default NavBarMui;

//navbar with routes
//https://javascript.works-hub.com/learn/how-to-create-a-responsive-navbar-using-material-ui-and-react-router-f9a01
//navbar with routes responsive
//https://dev.to/cmuralisree/responsive-navbar-material-ui-react-router-dom-2gcd
