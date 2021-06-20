import { Catalogueitem } from "./catalogueitem"
import { Datasourcedet } from "./datasourcedet";

export class Datasource {
    code: number;
    name: string;
    conditionExpression: string;
    catalogueitem: Catalogueitem = new Catalogueitem();// libraryTypeCat
    catalogueitem1: Catalogueitem = new Catalogueitem();// statusCat
    dateCreate: string = new Date().toString();
    dateLastModify: string = new Date().toString();
    userCreate: string = "1";
    userLastModify: string = "1";
    datasourcedetList: Datasourcedet[];
}
