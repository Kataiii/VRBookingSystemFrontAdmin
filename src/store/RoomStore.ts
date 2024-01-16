import axios, { AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
import { useContext } from "react";
import { Context } from "..";
import { RoomGetResponce } from "../enemy/response/RoomResponce";
import IRoom from "../enemy/Room"
import $api, { API_URL } from "../http/Index";

export default class RoomStore{
    allRooms: IRoom[] = [];
    notOccupiedRooms: IRoom[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    setAllRooms(rooms: IRoom[]){
        this.allRooms = rooms;
    }

    setNotOccupiedRooms(rooms: IRoom[]){
        this.notOccupiedRooms = rooms;
    }

    getRooms = async (token: string) => {
        try{
            const response: AxiosResponse<RoomGetResponce | any> = await $api.get(`/rooms`);
            const rooms : IRoom[] = response.data.rooms;
            this.setAllRooms(rooms);

            this.setNotOccupiedRooms(rooms.filter((item) => item.isOccupied == false));
            return this.notOccupiedRooms;
        }
        catch(e: any){
            console.log(e.response?.status);
            return null;
        }   
    }
}