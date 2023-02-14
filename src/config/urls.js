
const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const carsURL= '/cars';

const authURL = '/auth'

const urls = {
    cars: carsURL,
    login: authURL,
    refresh: `${authURL}/refresh`,
    me: `${authURL}/me`,
    user:'/users'
}

export  {
    baseURL,
    carsURL,
    urls 
}