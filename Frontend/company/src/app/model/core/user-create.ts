import { User } from './user';
import { Persons } from './persons';
import { Rolbyuser } from './rolbyuser';
import { Address } from './address';
import { Human } from './human';

export class UserCreateContainer{
    persons:Persons = new Persons();
    user:User = new User();
    rolbyuserList:Rolbyuser[] = [];
    addressList:Address[] = [];
    human:Human;
}