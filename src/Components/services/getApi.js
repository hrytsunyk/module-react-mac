import axios from "axios";

const getApi = axios.create({baseURL: 'https://api.spacexdata.com'});

export {getApi};