import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { BankModule } from '../bank/bank.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Components, PrimeNGModules } from './layout.exports';
import { LayoutRoutes } from './layout.routes';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BreadcrumbService } from './shell/breadcrumb.service';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      LayoutRoutes,
      SharedComponentsModule,
      CurrencyMaskModule,

      ...PrimeNGModules // Array con Modulos de PrimeNG
  ],
  providers: [ BreadcrumbService ],
  declarations: [
      ...Components, // array with components
  ]
})
export class LayoutModule { }
