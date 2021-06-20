import { Catalogueitem } from './catalogueitem';

export class Schedule {
    code: string;
    name: string;
    descripcion: string;
    dateCreate: string;
    dateLastModify: string;
    userCreate: number;
    userLastModify: number;
    catalogueitem: Catalogueitem = new Catalogueitem();
}