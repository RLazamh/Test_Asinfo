import { SchedulebydayPK } from './schedulebydayPK';
import { Schedule } from './schedule';

export class Schedulebyday {
    schedulebydayPK: SchedulebydayPK = new SchedulebydayPK();
    schedule: Schedule;
    hhmiFrom: string; 
    hhmiTo: string;
    statusCat:string = "STATUSCAT"; 
    status: string = "1";
    dateCreate: string;
    dateLastModify: string; 
    userCreate: string = "1" ; 
    userLastModify: string = "1";   
}