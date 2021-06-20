import { MenuGuard } from '../guards/menu-guard.service';
import { CatalogueGuard } from '../guards/catalogue-guard.service';
import { SessionGuard } from '../guards/session-guard.service';
import { ShellComponent } from './shell/shell.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './shell/dashboard.component';
import { LoginGuard } from '../guards/login-guard.service';
import { NotificationsComponent } from 'app/shared-components/notifications/notification-List/notifications.component';
import { DynamicSwitchNotificationComponent } from 'app/shared-components/notifications/dynamic-switch-notification/dynamic-switch-notification.component';


export const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        canActivate: [LoginGuard, SessionGuard, CatalogueGuard],
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'travel' , children: [
                {path: '', loadChildren: '../travel/travel.module#TravelModule'}
            ]},
            {path: 'ebill' , children: [
                {path: '', loadChildren: '../ebill/ebill.module#EbillModule'}
            ]},
            {path: 'general-admin', loadChildren: '../general-admin/general.module#GeneralModule'},
            {path: 'inventory', loadChildren: '../inventory/inventory.module#InventoryModule'},
            {path: 'fabril', loadChildren: '../fabril/fabril.module#FabrilModule'},
            {path: 'medicalcenter', loadChildren: '../medicalCenter/medicalcenter.module#MedicalCenterModule'},
            {path: 'meetingAssistant', loadChildren: '../meetingAssistant/meetingAssistant.module#meetingAssistantModule'},
            {path: 'instance', children: [
                {path: 'humanResources', loadChildren: '../human-resources/human-resources.module#HumanResourcesModule'},
                {path: 'bank', loadChildren: '../bank/bank.module#BankModule'},
                {path: 'cash', loadChildren: '../cash/cash.module#CashModule'},
                {path: 'persons', loadChildren: '../persons/persons.module#PersonsModule'},
                {path: 'general-instance', loadChildren: '../general-instance/general-instance.module#GeneralInstanceModule'},
                {path: 'accounting', loadChildren: '../accounting/accounting.module#AccountingModule'},
                {path: 'invoice', loadChildren: '../invoice/invoice.module#InvoiceModule'},
                {path: 'report', loadChildren: '../legal-reports/legal-reports.module#LegalReportsModule'},
                {path: 'providers', loadChildren: '../provider/provider.module#ProviderModule'},
                {path: 'accountreceivable', loadChildren: '../accountreceivable/accountreceivable.module#AccountreceivableModule'},
                {path: 'fixed-assets', loadChildren: '../fixed-assets/fixed-assets.module#FixedAssetsModule'},
                {path: 'cash', loadChildren: '../cash/cash.module#CashModule'}

            ]},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'notifications', component: NotificationsComponent},
            {path: 'notifications/:codeInstance/:codeCompany/:seqnotification/:nametransaction', component: DynamicSwitchNotificationComponent},
            {path: 'insurance', loadChildren: '../insurance/insurance.module#InsuranceModule'},
            {path: 'budget', loadChildren: '../budget/budget.module#BudgetModule'},
        ]
    },
];

export const LayoutRoutes: ModuleWithProviders = RouterModule.forChild(routes);
