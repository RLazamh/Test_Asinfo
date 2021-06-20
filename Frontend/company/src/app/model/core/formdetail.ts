import {FormdetailPK} from './formdetailPK';
import {Catalogueitem} from './catalogueitem';
import {Form} from './form';

export class Formdetail {
    formdetailPK: FormdetailPK = new FormdetailPK();
    name: string;
    observation: string;
    sectionCatalogue: Catalogueitem = new Catalogueitem();
    form: Form = new Form();
    typeElementCatalogue: Catalogueitem = new Catalogueitem();
    statusCatalogue: Catalogueitem = new Catalogueitem();
    requestCatalogue: Catalogueitem = new Catalogueitem();
    valueTypeCatalogue: Catalogueitem = new Catalogueitem();
    parent: Formdetail = new Formdetail();
    partner: Formdetail = new Formdetail();
    dateCreate: string = new Date().toString();
    dateLastModify: string = new Date().toString();
    userCreate: string = '1';
    userLastModify: string = '1';
}
