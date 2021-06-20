import {Menu} from './menu';
import {Originaloptions} from './originaloptions';

export class Menudetail {
    codeModule: number;
    codeMenu: Menu;
    originalOption: Originaloptions;
    code: number;
    parentMenu: Menudetail;
    nameFolder: string;
    icon: string;
    status: string;
}