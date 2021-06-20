import { Persons} from './persons';
import {Address} from "./address";

export class PersonsContainer {
    persons: Persons = new Persons();
    addressList: Address[] = [];
}
