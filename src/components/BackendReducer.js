import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataFile: []
}

const BackendReducer = createSlice({
    name: "BackendReducer",
    initialState,
    reducers: {
        addData: (state, action)=>{
            state.dataFile = action.payload
        }
    }
})

export const {addData} = BackendReducer.actions

export default BackendReducer.reducer