import {getApi} from "./getApi";

const getAll = getApi.get('/v4/launches/');

export {getAll};