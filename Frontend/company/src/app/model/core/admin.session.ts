import { User } from './user';
import { Human } from './human';
import { Role } from './role';
import { Optionsbyrol } from './optionsbyrol';

export class AdminSession{
    user:User;
    human: Human;
    roleList:Role[] = [];
    optionsbyrol:Optionsbyrol[] = [];
    activeComponentUrl:string;
}