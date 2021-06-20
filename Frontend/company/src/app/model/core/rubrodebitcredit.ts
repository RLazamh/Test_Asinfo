import { RubrodebitcreditPK } from './rubrodebitcreditPK';
import { Originaloptions } from './originaloptions';
import { Catalogueitem } from './catalogueitem';
import { Querylisting } from './querylisting';
import { Datasource } from './datasource';

export class Rubrodebitcredit {
    rubrodebitcreditPK: RubrodebitcreditPK = new RubrodebitcreditPK();
    rubroNem: string;
    dbCr: string;
    name: string;
    conceptByListing: boolean;
    codeSourceCompareListing: Datasource;
    codeSourceValueCont: Datasource;
    originaloptions: Originaloptions;
    codeQueryListing: Querylisting;
    catalogueitem: Catalogueitem = new Catalogueitem();
    dateCreate: string = new Date().toString();
    dateLastModify: string = new Date().toString();
    userCreate: string = "1";
    userLastModify: string = "1";
}