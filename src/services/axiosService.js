import axios from "axios";
import {baseURL} from "../components/apiURLS";

const axiosService = axios.create({baseURL});

export {
    axiosService
}