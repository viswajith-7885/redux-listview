import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./data";



const userSlice =createSlice({
    name:"users",
    initialState:userData,
    reducers:{
        adduser:(state,action)=>{
            state.push(action.payload)
        },
        Updateuser:(state,action)=>{
            const {name,email,id}=action.payload
           const uu = state.find(user=>user.id ===id)
           if(uu){
            uu.name=name
            uu.email = email
           }
        },
        removeuser:(state,action)=>{
            const {id}=action.payload
            return state.filter((e)=>e.id !==id)
           }
    }
})
export const {adduser,Updateuser,removeuser} = userSlice.actions
export default userSlice.reducer;