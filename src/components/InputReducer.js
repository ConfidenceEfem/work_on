import { createSlice } from '@reduxjs/toolkit'

const initialState = {
name: "",
email: "",
}

const InputReducer = createSlice({
    name: "InputReducer",
    initialState,
    reducers: {
    addName: (state,action)=>{
        state.name = action.payload
    },
    addEmail: (state, action)=>{
        state.email = action.payload
    }
    }
});

export const {
    addName,addEmail
} = InputReducer.actions
export default InputReducer.reducer