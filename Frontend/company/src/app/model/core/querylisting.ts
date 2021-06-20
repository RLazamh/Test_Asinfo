import { Rubrodebitcredit } from "./rubrodebitcredit";

export class Querylisting {
    code: number;
    name: string;
    query: string;
    dateCreate: string = new Date().toString();
    dateLastModify: string = new Date().toString();
    userCreate: string = "1";
    userLastModify: string = "1";
    rubrodebitcreditList: Rubrodebitcredit[];
}