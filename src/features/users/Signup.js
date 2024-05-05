import { Button, TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ManagerNavBar from "../navBar/ManagerNavBar";
import UserNavBar from "../navBar/UserNavBar";
import { addUserToServer, findByID } from "./usersSlice";
const Signup = () => {
    let disp = useDispatch();
    let nevigation = useNavigate();
    let user = useSelector(st => st.users.currentUser);
    let status = useSelector(st => st.users.status);
    let flag = useSelector(st => st.users.flag);
    let { register, handleSubmit, formState: { errors } } = useForm();
    const submittion = (data) => {

        //if(user.length==0){
        let copyData = {
            userID: +data.userID,
            userName: data.userName,
            password: data.password,
            tz: data.tz,
            year: +data.year,
            address: {
                city: data.city,
                street: data.street,
                home: +data.home
            },
            email: data.email
        }
        disp(addUserToServer(copyData)).unwrap().then(res => {
            
                if (res == "משתמש קיים") {
                    alert("משתמש קיים");
                }
               
                else { 
                    if(res.status==="client") {
                    <UserNavBar/>
                    }
                    else{
                        <ManagerNavBar/>
                    }
                    nevigation('/home');
                }
            
        });
    }
    
    return (
        <form onSubmit={handleSubmit(submittion)}>
            <TextField {...register("userName", {
                required: "name is required"
            })}
                label="שם משתמש" />
            {errors.userName && <p className="error">{errors.userName.message}</p>}
            <br />
            <br />
            <TextField {...register("userID", {
                required: "id is required",
                // pattern: /[0-9]/
            })}
                label="קוד משתמש" />
            {errors.userId && <p className="error">{errors.userId.message}</p>}
            <br />
            <br />
            <TextField {...register("password", {
                required: "password is required",
                //   pattern:/l{8}/
            })}
                label="סיסמא" />
            {errors.password && <p className="error">{errors.password.message}</p>}
            <br />
            <br />
            <TextField {...register("tz", {
                required: "tz is required"
            })} label="מ.ז." />
            {errors.tz && <p className="error">{errors.tz.message}</p>}
            <br />
            <br />
            <TextField {...register("year", {
                required: "year is required"
            })} label="שנת לידה" />
            {errors.year && <p className="error">{errors.year.message}</p>}
            <br />
            <br />



            <TextField {...register("email", {
                required: "email is required"
            })} label="מייל" />
            {errors.email?.type === "required" && <p className="error-message">{errors.email.message}</p>}
            <br />
            <br />
            <TextField {...register("city", {
            })}
                label="עיר" />
            {errors.city?.type === "required" && <p className="error-message">{errors.city.message}</p>}
            <br />
            <br />

            <TextField {...register("street", {
                //required: "street is required"
            })} label="רחוב" />
            {errors.street?.type === "required" && <p className="error-message">{errors.street.message}</p>}
            <br />
            <br />
            <TextField {...register("home", {
                //required: "home is required"
            })} label="מספר בית" type="number" />
            {errors.home?.type === "required" && <p className="error-message">{errors.home.message}</p>}
            <br />
            <br />
            {/* <TextField {...register("phone", {
            required: "phone is required"
        })} label="phone" />
        {errors.street?.type === "required" && <p className="error-message">{errors.phon.message}</p>}
        <br />
        <br /> */}
            <Button variant="contained" type="submit">הוסף</Button>
        </form>
    )
}
export default Signup;