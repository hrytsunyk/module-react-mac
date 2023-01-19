import axios from "axios";

const getApi = axios.create({baseURL: 'https://api.spacexdata.com'});
const getAll = getApi.get({url: '/v4/launches/'})

export {getApi};