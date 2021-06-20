import { Persons } from "./persons";
import { Schedule } from "./schedule";
import { Rolbyuser } from "./rolbyuser";
import { Catalogueitem } from "./catalogueitem";

export class User {
    code: number;
    userName: string;
    password: string;
    accesSchedule: Schedule;
    status:string;
    statusCat:string;
    dateCreate:Date;
    dateLastModify:Date;
    userCreate:number;
    userLastModify:number;
    changePassNextEnter:boolean;
    dateDuePassword:Date;
    codePerson: Persons;
    rolbyuserList: Rolbyuser[];
    catalogueitem:Catalogueitem;
}