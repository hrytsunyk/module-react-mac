import {axiosService} from "../services/axiosService";

const usersServices = axiosService.get(get.users);

export {
    axiosService
};