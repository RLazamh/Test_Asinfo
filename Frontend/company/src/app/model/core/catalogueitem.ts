import {CatalogueitemPK} from "./catalogueitemPK";
import {Catalogue} from "./catalogue";

export class Catalogueitem {
    nameItem: string;
    catalogueitemPK: CatalogueitemPK = new CatalogueitemPK();
    catalogue: Catalogue;
    dateCreate: string;
    dateLastModify: string;
    userCreate: string;
    userLastModify: string;
}