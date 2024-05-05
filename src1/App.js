import logo from './logo.svg';
import './App.css';
import ListProducts from './features/products/ListProducts'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import BigBasketList from './features/basket/BigBasketList';
import HomePage from './HomePage';
import AddProduct from './features/products/AddProduct';
import User from "./features/users/User"
import Login from './features/users/Login';
import Signup from './features/users/Signup';
import NavBarMui from './NavBarMui';
import N from './N';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
       <NavBarMui/>
      {/* <N/> */}
      <Routes>
        <Route path='' element={<User/>}/>
        <Route path='home' element={<HomePage/>}/>
        <Route path='products' element={<ListProducts/>}/>
        <Route path='basket' element={<BigBasketList/>}/>
        <Route path='addProduct' element={<AddProduct/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
