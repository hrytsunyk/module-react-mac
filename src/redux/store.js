import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/carSlice";
import {myData, userReducer} from "./slices/userSlice";


const rootReducer = combineReducers({
    cars: carReducer,
    user: userReducer
});

const setupStore = ()=> configureStore({
    reducer: rootReducer
});

export {
    setupStore
}