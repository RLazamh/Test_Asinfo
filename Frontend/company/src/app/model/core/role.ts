export class Role {
    code: number;
    nameRol: string;
    description: string;
    lookAndFeelCat: string = "LOOKANDFEELCAT";
    lookAndFeel: string;
    statusCat: string = "STATUSCAT";
    status: string;
    dateCreate: string = new Date().toString(); 
    dateLastModify: string = new Date().toString(); 
    userCreate: string = "1"; 
    userLastModify: string = "1";
}