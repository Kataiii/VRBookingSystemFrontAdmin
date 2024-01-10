import { IRole } from "./Role";


export interface IClient{
    id: number;
    surname?: string;
    firstname: string;
    patronomyc?: string;
    id_phone: string;
    date_birthday?: Date;
    number_of_bonuses: number;
    id_status: number;
    roles: IRole[];
}