import {getApi} from "./getApi";

const getAll = getApi.get('/v3/launches/');

export {getAll};