import { createSlice } from "@reduxjs/toolkit";






const userSlice=createSlice({
    name:"user",
    initialState:{data:[],
    },
    reducers:{
        allUser:(state,{payload})=>{
            
            state.data=payload
            
        },
        deleteCart:(state,{payload})=>{
            state.data.splice(payload,1)
            
        },
       
    },
   
})

export  default userSlice.reducer;
export const {allUser,deleteCart} =userSlice.actions