import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState ={
    cars:[],
    loading: null,
    updatedCars: null
};


const allCars= createAsyncThunk(
    'carSlice/allCars',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await carService.getAllCars()
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const create = createAsyncThunk(
    'carSlice/create',
    async ({car},thunkAPI)=>{
        try {
            await carService.createCar(car);
            thunkAPI.dispatch(allCars())

        } catch (e) {
           return  thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI)=>{
        try {
            await carService.deleteCarByID(id)
            thunkAPI.dispatch(allCars())
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const updateById= createAsyncThunk(
    "arSlice/deleteCar",
    async ({id, car}, thunkAPI)=>{
        try {
            await carService.updateCarByID(id,car)
            thunkAPI.dispatch(allCars())
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);




const carSlice= createSlice({
    name: "carSlice",
    initialState,
    reducers:{
        setForUpdateCars:(state, action)=>{
            state.updatedCars = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(allCars.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loading = false;

            })
            .addCase(allCars.pending, (state, action) => {
                state.loading = true;

            })

    }

});


const {reducer:carReducer, actions:{setForUpdateCars}}= carSlice;


const carActions = {
    allCars,
    create,
    setForUpdateCars,
    deleteCar,
    updateById
};

export {
    carReducer,
    carActions

}