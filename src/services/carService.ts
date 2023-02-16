import {axiosService, IResp} from "./axiosService";
import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAll: ():IResp<ICar[]> => axiosService.get(urls.cars.main)
};

export {
    carService
}