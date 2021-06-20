import {Module} from "./module";
import {Catalogueitem} from "./catalogueitem";

export class Originaloptions {
    catalogueitem: Catalogueitem = new Catalogueitem();
    codeModule: Module = new Module();
    code: number;
    nameOption: string;
    descriptionOption: string;
    url: string;
    MigraToInstance: number;
    dateCreate: Date;
    dateLastModify: Date;
    userCreate: string;
    userLastModify: string;
    status: string;
    statusCat: string;
}