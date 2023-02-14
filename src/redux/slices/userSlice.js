import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";


const initialState = {
    user:[]
};

const myData = createAsyncThunk(
    'userSlice/myData',
    async (_, thunkAPI )=>{
        try {
           const {data} = await authService.me();
           return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
     name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
         builder.addCase(myData.fulfilled, (state, action) => {
             state.user = action.payload
         })
    }
})


const {reducer:userReducer} = userSlice;

const userAction = {
    myData
}

export {
    userReducer,
    userAction

}