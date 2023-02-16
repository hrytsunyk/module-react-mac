import axios, {AxiosPromise, AxiosResponse} from "axios";
import {baseURL} from "../configs";

export type IResp<T> = Promise<AxiosResponse<T>>;

const axiosService = axios.create({baseURL});

export {
    axiosService,
}