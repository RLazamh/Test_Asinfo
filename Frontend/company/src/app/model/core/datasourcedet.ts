import {Datasource} from "./datasource"
import {Catalogueitem} from "./catalogueitem"
import {DatasourcedetPK} from "./datasourcedetPK"

export class Datasourcedet {
    datasourcedetPK: DatasourcedetPK = new DatasourcedetPK();
    name: string;
    nameObject: string;
    filterList: string;
    datasource: Datasource;
    catalogueitem: Catalogueitem = new Catalogueitem();// statusCat
    dateCreate: string = new Date().toString();
    dateLastModify: string = new Date().toString();
    userCreate: string = "1";
    userLastModify: string = "1";
}
