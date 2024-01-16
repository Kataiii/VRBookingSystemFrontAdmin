import axios from "axios";
import { makeAutoObservable } from "mobx"
import { AuthResponse } from "../enemy/response/AuthResponse";
import { API_URL } from "../http/Index";

export interface IFormLogin {
    phone: string,
    password: string,
    errorPhone: boolean,
    errorPassword: boolean,
    isAuth: boolean
}


class Auth {
    
    private formLogin: IFormLogin = {
        phone: "",
        password: "",
        errorPhone: false,
        errorPassword: false,
        isAuth: false
    }

    constructor() {
        makeAutoObservable(this);
    }

    visibleError = (isVisible: boolean) => {
        this.formLogin.errorPhone = isVisible;
        this.formLogin.errorPassword = isVisible
    }

    setPhone = (phone: string) => {
        this.formLogin.phone = phone;
    }

    setPassword = (password: string) => {
        this.formLogin.password = password;
    }

    auth = async (): Promise<AuthResponse | null> => {
        try {
            const response = await axios.post(`${API_URL}/auth/auth`,
                {
                    phone: this.formLogin.phone,
                    password: this.formLogin.password
                },
                {
                    headers: {
                      'Content-Type': 'application/json',
                       'Access-Control-Allow-Origin': 'http://localhost:3000'
                    },
                     withCredentials: true
                });
            this.visibleError(false);
            this.formLogin.isAuth = true;
            return response.data as AuthResponse;
        } catch (e: any) {
            console.log(e.status);
            this.visibleError(true);
            this.formLogin.isAuth = false;
            return null;
        }
    }
}

export default Auth;