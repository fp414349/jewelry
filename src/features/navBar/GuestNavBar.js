import ResponsiveAppBar from "./ResponsiveAppBar";
import MenuLink from "./MenuLink";
const GuestNavBar = () => {
    return ( 
        <ResponsiveAppBar>
             <MenuLink txt="התחברות" url="login"/>
            <MenuLink txt="הרשמות" url="signup"/>
            <p style={{marginLeft:"150px"}}>guest</p>
        </ResponsiveAppBar>
     );
}
 
export default GuestNavBar;