import {Catalogueitem} from './catalogueitem';

export class Form {
    code: number;
    name: string;
    description: string;
    statusCatalogue: Catalogueitem = new Catalogueitem();
    dateCreate: string = new Date().toString();
    dateLastModify: string = new Date().toString();
    userCreate: string = '1';
    userLastModify: string = '1';
}
