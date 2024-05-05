import logo from './logo.svg';
import './App.css';
import ListProducts from './features/products/ListProducts'
import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import AddProduct from './features/products/AddProduct';
import User from "./features/users/User"
import Login from './features/users/Login';
import Signup from './features/users/Signup';
import NavBarMui from './features/navBar/NavBarMui';
import N from './N';
import { color, margin } from '@mui/system';
import BigBasketList from './features/basket/BigBasketList';
import ResponsiveAppBar from './features/navBar/ResponsiveAppBar';
import GuestNavBar from './features/navBar/GuestNavBar';
import ManagerNavBar from './features/navBar/ManagerNavBar';
import { useSelector } from 'react-redux';
import UserNavBar from './features/navBar/UserNavBar';
import Update from './features/products/Update';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { reloadPage } from './features/users/usersSlice';

import Checkout from './features/orders/Checkout'

function App() {
  let userRole=useSelector(st=>st.users.userRole);
  let dispatch=useDispatch();
  useEffect(() =>{
    dispatch(reloadPage())
  }, [])
  return (
    <div className="App">
      {/* <Navbar/> */}
       {/* <NavBarMui/> */}
       {/* <GuestNavBar/> */}
       {/* if(userRole==0){
        <GuestNavBar/>
       }
       
        if(userRole==1){
          <UserNavBar/>
        }
         if(userRole==2){
            <ManagerNavBar/>
          } */}
      
       {userRole==0?<GuestNavBar/>:userRole==1?<UserNavBar/>:<ManagerNavBar/>}
         {/* <N/>  */}
      <div style={{marginTop:"100px"}}> 
      <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='home' element={<HomePage/>}/>
        <Route path='products' element={<ListProducts/>}/>
        {/* <Route path='basket' element={<BigBasketList/>}/> */}
        <Route path='basket' element={<BigBasketList/>}/>
        <Route path='addProduct' element={<AddProduct/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='update' element={<Update/>}/>
     
        <Route path='finish' element={<Checkout/>}/>
      </Routes>
    </div>
     </div>
  );
}

export default App;
