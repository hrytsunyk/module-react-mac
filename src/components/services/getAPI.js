import axios from "axios";

const getAPI = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});

export {getAPI};
