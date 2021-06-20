import { Catalogueitem } from './catalogueitem';

export class Module {
    code: number;
    nameModule: string;
    descriptionModule: string;
    catalogueitem: Catalogueitem;
    dateCreate: string = new Date().toString(); 
    dateLastModify: string = new Date().toString(); 
    userCreate: string = "1"; 
    userLastModify: string = "1";
}

