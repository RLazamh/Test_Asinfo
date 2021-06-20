import { Catalogueitem } from "./catalogueitem";
import { Human } from "./human";
import { Address } from "./address";
import { User } from './user';

export class Persons {
    code: number;
    name: string;
    identify: string;
    statusCat: string;
    status: string;
    typePerson: string;
    typePersonCat: string;
    // languageCat:string;
    // language:string;
    // identifyType:string;
    // identifyTypeCat:string;
    // categoryPersonCat:string;
    // categoryPerson:string;
    // nationalityCat:string;
    // nationality:string;
    dateCreate: Date;
    dateLastModify: Date;
    userCreate: number;
    userLastModify: number;
    catalogueitem: Catalogueitem;//CategoryPersonCat
    catalogueitem1: Catalogueitem;//IdentifyTypeCat
    catalogueitem2: Catalogueitem;//LanguageCat
    catalogueitem3: Catalogueitem;//NatyonalityCat
    human: Human;
    addressList: Address[] = [];
    userList: User[] = [];
}
