import axios, { AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
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

    getRooms = async () => {
        try{
            // console.log('AAAAAAAAAAAAAAAA');
            // // const responce: AxiosResponse<RoomGetResponce | any> = await $api.get(`${API_URL}/rooms`);
            // const rooms : IRoom[] = response.data.rooms;
            // this.setAllRooms(rooms);

            // this.setNotOccupiedRooms(rooms.filter((item) => item.isOccupied == false));
            // return this.notOccupiedRooms;
        }
        catch(e: any){
            console.log(e.response?.status);
            return null;
        }   
    }
}