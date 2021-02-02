export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const GET_ERRORS = "GET_ERRORS"

export const CREATE_MESSAGE = "CREATE_MESSAGE"

export type User = {
    username: string
    password: string
    email: string
}

export interface UserLoading {
    type: typeof USER_LOADING,
    // payload: {
    //     user: User
    // }
}
export interface UserLoaded {
    type: typeof USER_LOADED
}
export interface AuthError {
    type: typeof AUTH_ERROR
}
export interface LoginSuccess {
    type: typeof LOGIN_SUCCESS
}
export interface LoginFail {
    type: typeof LOGIN_FAIL
}
export interface LogoutSuccess {
    type: typeof LOGOUT_SUCCESS
}
export interface RegisterSuccess {
    type: typeof REGISTER_SUCCESS
}
export interface RegisterFail {
    type: typeof REGISTER_FAIL
}

export type AuthDispatchTypes = UserLoading | UserLoaded | AuthError | LoginSuccess | LoginFail | LogoutSuccess | RegisterSuccess | RegisterFail 