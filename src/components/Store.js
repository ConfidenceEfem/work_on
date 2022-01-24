import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./MainGlobal"
import myInputReducer from "./InputReducer"
import backendstore from "./BackendReducer"

export const store = configureStore({
    reducer:{myReducer,myInputReducer,backendstore}
})