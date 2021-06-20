import { AddressPK } from "./addressPK";
import { Catalogueitem } from "./catalogueitem";

export class Address {
    addressPK: AddressPK = new AddressPK();
    addressType: string;
    addressTypeCat: string;
    emailAddress: string;
    country: string;
    countryCat: string;
    city: string;
    cityCat: string;
    phone: string;
    street1: string;
    numberHouse: string;
    street2: string;
    dateCreate: Date;
    dateLastModify: Date;
    userCreate: number;
    userLastModify: number;
    catalogueitem: Catalogueitem;
    catalogueitem1: Catalogueitem;
    catalogueitem2: Catalogueitem;
}
