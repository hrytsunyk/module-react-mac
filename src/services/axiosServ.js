import axios from "axios";

import {baseURL} from "../apiURLs";


const axiosServ = axios.create({baseURL});

export {
    axiosServ
};