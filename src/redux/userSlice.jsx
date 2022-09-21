import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id:'',
    email:'',
    token:''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser(state,action){
            state.email = action.payload.email;
            state.id = action.payload.email;
            state.token = action.payload.token
        },
        signOuts(state){
            state.email = null;
            state.id = null;
            state.token = null;
        }
    }
})

export const {addUser,signOuts} = userSlice.actions
export default userSlice.reducer