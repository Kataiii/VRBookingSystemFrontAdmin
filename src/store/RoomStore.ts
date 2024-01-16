import axios, { AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
import { useContext } from "react";
import { Context } from "..";
import { RoomGetResponce } from "../enemy/response/RoomResponce";
import IRoom from "../enemy/Room"
import $api, { API_URL } from "../http/Index";

export default class RoomStore{
    allRooms: IRoom[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    setAllRooms = (rooms: IRoom[]) => {
        this.allRooms = rooms;
    }

    getRooms = async (token: string) => {
        try{
            const response = await $api.get(`/rooms`);
            const rooms : IRoom[] = response.data;
            console.log(rooms);
            this.setAllRooms(rooms);
            console.log('aaaaaaaaaa');
            console.log(this.allRooms);
            console.log(this);
            return this.allRooms;
        }
        catch(e: any){
            return null;
        }   
    }
}