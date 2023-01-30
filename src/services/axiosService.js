import axios from "axios";
import {baseURL} from "../apiURLs";

const axiosService = axios.create({baseURL});

export {
    axiosService
};
