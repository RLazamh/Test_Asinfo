import { OptionsbyrolPK } from './optionsbyrolPK';
import { Schedule } from './schedule';
import { Originaloptions } from './originaloptions';
import { Role } from './role';

export class Optionsbyrol {
    optionsbyrolPK: OptionsbyrolPK = new OptionsbyrolPK();
    accessSchedule: Schedule = new Schedule();
    originaloptions: Originaloptions = new Originaloptions();
    rol: Role = new Role();
    statusCat: string = "STATUSCAT";
    status: string;
    dateCreate: string = new Date().toString(); 
    dateLastModify: string = new Date().toString(); 
    userCreate: string = "1"; 
    userLastModify: string = "1";
}