import { makeAutoObservable } from "mobx";
import { IClient } from "../enemy/Client";

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
}