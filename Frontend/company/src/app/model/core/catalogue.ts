export class Catalogue {
    code: string;
    name: string;
    descripcion: string;
    dateCreate: string = new Date().toString(); 
    dateLastModify: string = new Date().toString(); 
    userCreate: string = "1"; 
    userLastModify: string = "1";
}