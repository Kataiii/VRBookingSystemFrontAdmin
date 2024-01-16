import { makeAutoObservable } from "mobx";
import { IClient } from "../enemy/Client";
import axios from "axios";
import { AuthResponse } from "../enemy/response/AuthResponse";
import { API_URL } from "../http/Index";


export default class Store{
    client = {} as IClient;
    access = '';
    isAuth = false;
    isFailAuth = false;

    constructor(){
        makeAutoObservable(this);
    }

    setClient(client: IClient){
        this.client = client;
    }

    setAccess(access: string){
        this.access = access;
    }

    setIsAuth(isAuth: boolean){
        this.isAuth = isAuth;
    }

    setIsFailAuth(isFailAuth: boolean){
        this.isFailAuth = isFailAuth;
    }

    async refresh(){
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true});
            console.log(response.status);
            this.setClient(response.data.account);
            this.setAccess(response.data.accessToken);
            this.setIsAuth(true);
        } catch(e: any){
            return e.response?.status;
        }
    }
}