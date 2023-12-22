"use client";

let token = "";
export const setToken = (_token: string) => {
    token = _token;
}
export const getToken = () => {
    return token;
}