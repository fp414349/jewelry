import MenuLink from "./MenuLink";
import ResponsiveAppBar from "./ResponsiveAppBar";

const UserNavBar = () => {
  return (
    <ResponsiveAppBar>
      <MenuLink txt="סל קניות" url="basket"/>
      <p style={{marginLeft:"150px"}}>user</p>
    </ResponsiveAppBar>
  );
};

export default UserNavBar;
