import { makeAutoObservable } from "mobx"

export interface IFormLogin{
    phone: string,
    password: string,
    errorPhone: boolean,
    errorPassword: boolean,
    isAuth: boolean
}

class Auth{
    formLogin: IFormLogin = {
        phone: "",
        password: "",
        errorPhone: false,
        errorPassword: false,
        isAuth: false
    }

    constructor(){
        makeAutoObservable(this);
    }
}