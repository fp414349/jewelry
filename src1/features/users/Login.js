import { TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { findByID } from "./usersSlice";


const Login = () => {
    let nevigation = useNavigate();
    let disp = useDispatch();
    let user = useSelector(st => st.users.currentUser);
    let status = useSelector(st => st.users.status);
    let { register, handleSubmit, formState: { errors } } = useForm();

    const submition = async (data) => {
        let copyData = {
            userID: +data.userID,
            password: data.password
        }
        let currentUser = disp(findByID(copyData)).unwrap().then(res => {
            //console.log(user);
            //console.log(status);
            if (res.length === 0) {
                //if (user.length == 0) {
                    nevigation('/signup')
                //}
            }
                else {
                    nevigation('/home')
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
                    lable="קוד משתמש" />
                {errors.userId && <p className="error">{errors.userId.message}</p>}

                <TextField {...register("password", {
                    required: "password is required",
                    //  pattern:/l{8}/
                })}
                    lable="password" />
                {errors.password && <p className="error">{errors.password.message}</p>}


                <Button variant="contained" type="submit">כניסה</Button>
            </form>
        </div>




    );

}
export default Login;