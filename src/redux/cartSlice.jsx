import { create } from "@mui/material/styles/createTransitions";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    total: 0,
    items: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart(state,action){
            const finded = state.items.find(obj => obj.id === action.payload.id)
            if(finded){
                state.items.filter(obj => obj.id !== action.payload)
            }else{
                state.items.push(action.payload)
            }
        },
        deleteCart(state,action){
           state.items = state.items.filter(obj => obj.id !== action.payload)
        }
    }
})

export const {addCart,deleteCart} = cartSlice.actions
export default cartSlice.reducer