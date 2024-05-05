import { TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import UserNavBar from "../navBar/UserNavBar";
import ManagerNavBar from "../navBar/ManagerNavBar";
import Signup from "./Signup";
import { findByID } from "./usersSlice";


const Login = () => {
    let nevigation = useNavigate();
    let disp = useDispatch();
    let user = useSelector(st => st.users.currentUser);

    let role = useSelector(st => st.users.userRole);
    let { register, handleSubmit, formState: { errors } } = useForm();

    const submition = async (data) => {
        let copyData = {
            userID: +data.userID,
            password: data.password
        }
        let currentUser = disp(findByID(copyData)).unwrap().then(res => {
            if (res === "undefined") {
                console.log(role);
                nevigation('/signup')
            }
            else {
                if (copyData.password == "abcd1234") {
                    <ManagerNavBar />
                    nevigation('/home')
                }
                else {
                    <UserNavBar />
                    nevigation('/home')
                }
            }

        });

    }
    return (

        <div>
            <form onSubmit={handleSubmit(submition)}>
     

                <TextField {...register("userID", {
                    required: "id is required",
                    pattern: /[0-9]/
                })}
                    label="קוד משתמש" />
                {errors.userId && <p className="error">{errors.userId.message}</p>}
                <br/>
                <br/>

                <TextField {...register("password", {
                    required: "password is required",
                    //  pattern:/l{8}/
                })}
                    label="סיסמא" />
                {errors.password && <p className="error">{errors.password.message}</p>}
                <br/>
                <br/>


                <Button variant="contained" type="submit">כניסה</Button>
            </form>
        </div>




    );

}
export default Login;