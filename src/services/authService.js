import {axiosService} from "./axiosService";
import {urls} from "../config";


const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {

    login: async function (dataToken) {
        const response = await axiosService.post(urls.login, dataToken)

        if (response.status === 200) {
            this.setTokens(response.data)
        }
        return response
    },

    refresh: async function (refresh) {
      const response = await axiosService.post(urls.refresh, {refresh})

        if (response.status === 200) {
            this.setTokens(response.data)
        }
        return response
        },

    me: () => axiosService.get(urls.me),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },

    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),

    deleteTokenKeys: () => {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },

    isAuthenticated: () => !!localStorage.getItem(accessTokenKey)

}

export {
    authService
}