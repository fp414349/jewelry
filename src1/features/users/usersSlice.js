import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom";
import{findUser,addUser} from './userApi'

// export const fetchAllUsers= createAsyncThunk(
//     'usersInSlice/getAllUsers', async (thunkAPI) => {
//         const response = await getAllUsers();
//         console.log(response);
//         return response.data;
//     }
// )
export const findByID= createAsyncThunk(
    'usersInSlice/findUser', async (user,thunkAPI) => {
        const response = await findUser(user);
        return response.data;
        
    }
)
export const addUserToServer=createAsyncThunk(
    'usersInSlice/addUser',async(user,thunkAPI)=>{
        const res=await addUser(user);
        console.log(res.data);
        return res.data
    }
)

const initialState={
    status:"idle",
    flag:0,
    currentUser:{}
}
// let nevigation=useNavigate();
const usersSlice= createSlice({
    name: "usersSlice",
    initialState,
    reducers:{
        // findUser:{
        //     reducer:(state,action)=>{
        //        let ind=usersArr.findIndex(item=>item.id==action.payload.id&&item.name==action.payload.name)
        //        if(ind!=-1){
        //          nevigation("home")
        //        }
        //        return(<p>error</p>);
        //     }
        // }
    },
    extraReducers:(builder)=>{
 
    builder.addCase(findByID.fulfilled,(state,action)=>{
        console.log(action.payload)
       state.currentUser=action.payload
       state.status="fullfilled"
       console.log(initialState.currentUser)
    }).addCase(findByID.rejected,(state,action)=>{
        state.status="error"
    }).addCase(findByID.pending,(state,action)=>{
        state.status="pending"
    }).addCase(addUserToServer.fulfilled,(state,action)=>{
        state.status="fulfilled"
        console.log(action.payload)
        
        if(action.payload=="משתמש קיים"){
           state.flag=1;
        }
        else{
            state.flag=2;
            state.currentUser=action.payload;
        }
        console.log(state.flag);
    }).addCase(addUserToServer.rejected,(state,action)=>{
        state.status="error"
    }).addCase(addUserToServer.pending,(state,action)=>{
        state.status="pending"
    })
    }
   
})

export default usersSlice.reducer;

//addProduct: {
    //     reducer: (state, action) => {
    //         action.payload.id = state.productsArr[state.productsArr.length - 1].id + 1;
    //         console.log(action.payload);
    //         state.productsArr.push(action.payload)
    //         axios.post("http://localhost:4000/product/", action.payload)
    //         console.log(state.productsArr);
    //     },