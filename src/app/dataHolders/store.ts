import {create} from "zustand";

interface userLogState{
    isLogedIn: boolean,
    fname: string,
    lname: string,
    isVerified: boolean,
    isFetching: boolean,
    setIsFetching: (isFetching: boolean) => void,
    setUserLog: (isLogedIn: boolean, fname: string, lname: string, isVerified: boolean) => void
}


export const useUserLog = create<userLogState>()((set)=>({
    isLogedIn: false,
    fname: "",
    lname: "",
    isVerified: false,
    isFetching: false,
    setIsFetching: (isFetching: boolean) => set({isFetching}),
    setUserLog: (isLogedIn: boolean, fname: string, lname: string, isVerified: boolean) => set(
        {isLogedIn, fname, lname, isVerified}
    ),
}));

interface servicesType{
    services: any[],
    setServices: (services: []) => void
}

export const useServices = create<servicesType>()((set)=>({
    services: [],
    setServices: (services: []) => set({services}),
}));

interface booksType{
    books: any[],
    setBooks: (books: []) => void
}

export const useBooks = create<booksType>()((set)=>({
    books: [],
    setBooks: (books: []) => set({books}),
}));