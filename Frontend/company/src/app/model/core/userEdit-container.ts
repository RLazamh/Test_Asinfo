import { User } from './user';
import { Persons } from './persons';
import { Rolbyuser } from './rolbyuser';
import { Address } from './address';
import { Human } from './human';

export class UserEditContainer{
    persons:Persons = new Persons();
    user:User = new User();
    newAddressList:Address[] = [];
    editedAddressList:Address[] = [];
    deletedAddressList:Address[] = [];
    deletedRolbyuserList:Rolbyuser[] = [];
    newRolbyuserList:Rolbyuser[] = [];
    human:Human;
}