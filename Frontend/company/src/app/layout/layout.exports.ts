//Imports de Components
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/topbar.component';
import { InlineProfileComponent } from './shell/profile.component';
import { AppMenuComponent, AppSubMenuComponent } from './shell/menu.component';
import { AppFooterComponent } from './shell/footer.component';
import { AppComponent } from './shell/app.component';
import { DashboardComponent } from './shell/dashboard.component';
import { AccessDeniedComponent } from './shell/access-denied.component';
import { ClockComponent } from './shell/clock.component';
import { PageNotFoundComponent } from './shell/page-not-found.component';

//Imports de PrimeNG
// import {AccordionModule} from 'primeng/primeng';
// import {AutoCompleteModule} from 'primeng/primeng';
// import {BreadcrumbModule} from 'primeng/primeng';
// import {ButtonModule} from 'primeng/primeng';
// import {CalendarModule} from 'primeng/primeng';
// import {CarouselModule} from 'primeng/primeng';
// import {ChartModule} from 'primeng/primeng';
// import {CheckboxModule} from 'primeng/primeng';
// import {ChipsModule} from 'primeng/primeng';
// import {CodeHighlighterModule} from 'primeng/primeng';
// import {ConfirmDialogModule} from 'primeng/primeng';
// import {SharedModule} from 'primeng/primeng';
// import {ContextMenuModule} from 'primeng/primeng';
// import {DataGridModule} from 'primeng/primeng';
// import {DataListModule} from 'primeng/primeng';
// import {DataScrollerModule} from 'primeng/primeng';
// import {DataTableModule} from 'primeng/primeng';
// import {DialogModule} from 'primeng/primeng';
// import {DragDropModule} from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
// import {EditorModule} from 'primeng/primeng';
// import {FieldsetModule} from 'primeng/primeng';
// import {FileUploadModule} from 'primeng/primeng';
// import {GalleriaModule} from 'primeng/primeng';
// import {GMapModule} from 'primeng/primeng';
// import {GrowlModule} from 'primeng/primeng';
// import {InputMaskModule} from 'primeng/primeng';
// import {InputSwitchModule} from 'primeng/primeng';
// import {InputTextModule} from 'primeng/primeng';
// import {InputTextareaModule} from 'primeng/primeng';
// import {LightboxModule} from 'primeng/primeng';
// import {ListboxModule} from 'primeng/primeng';
// import {MegaMenuModule} from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
// import {MenubarModule} from 'primeng/primeng';
// import {MessagesModule} from 'primeng/primeng';
// import {MultiSelectModule} from 'primeng/primeng';
// import {OrderListModule} from 'primeng/primeng';
// import {OverlayPanelModule} from 'primeng/primeng';
// import {PaginatorModule} from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { PanelMenuModule } from 'primeng/primeng';
import { ScrollPanelModule } from 'primeng/primeng';
import { AppBreadcrumbComponent } from './shell/app.breadcrumb.component';
import { AppRightpanelComponent } from './shell/app.rightpanel.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

export const PrimeNGModules = [
    DropdownModule,
    ScrollPanelModule,
    OverlayPanelModule,
    FileUploadModule,
    DialogModule,
    MenuModule,
    PanelModule,
    PanelMenuModule
];

export const Directives = [
];

export const Pipes = [
];

export const Components = [
    ShellComponent,
    TopBarComponent,
    InlineProfileComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppFooterComponent,
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    ClockComponent,
    AppBreadcrumbComponent,
    AppRightpanelComponent
];
