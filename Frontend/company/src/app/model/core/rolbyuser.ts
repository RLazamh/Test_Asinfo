import { Role } from "./role";
import { RolbyuserPK } from "./rolbyuserPK";

export class Rolbyuser {
    rolbyuserPK: RolbyuserPK = new RolbyuserPK();
    rol: Role;
    dateCreate: Date;
    dateLastModify: Date;
    status: string;
    statusCat: string;
    userCreate: number;
    userLastModify: number;
}