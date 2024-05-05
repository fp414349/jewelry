import { Link } from "react-router-dom";
import MenuLink from "./MenuLink";
import ResponsiveAppBar from "./ResponsiveAppBar";

const ManagerNavBar = () => {
  return (
    <ResponsiveAppBar>
      <MenuLink txt="הוספת מוצר" url="addProduct" />
    <p style={{marginLeft:"150px"}}>manager</p>
 
    </ResponsiveAppBar>
  );
};

export default ManagerNavBar;
