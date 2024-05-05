import axios from "axios";

export const findUser=async(user)=>{
    console.log(user.userID);
    return  await axios.get('http://localhost:4000/api/user?userid='+user.userID);
}
export const addUser=async(user)=>{
    return await axios.post('http://localhost:4000/api/user/adduser',user)
}