import packageJson from '../../package.json'

export const API_URL = import.meta.env.VITE_API_URL as string
export const AUTH_REFRESH_URL = API_URL + '/v1/auth/refresh'
export const AUTH_ME_URL = API_URL + '/v1/auth/me'
export const AUTH_LOGOUT_URL = API_URL + '/v1/auth/logout'
export const APP_VERSION = packageJson.version
