import {axiosService} from "./axiosService";
import {carsURL} from "../config";

const carService = {
    getAllCars: ()=> axiosService.get(carsURL),
    getCarByID: (id)=> axiosService.get(`${carsURL}/${id}`),
    createCar: (data)=> axiosService.post(carsURL, data),
    updateCarByID: (id, date)=> axiosService.put(`${carsURL}/${id}`, date),
    deleteCarByID: (id)=> axiosService.delete(`${carsURL}/${id}`),
};


export  {
    carService
};