import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import {MenuModule} from "primeng/menu";


@NgModule({
  declarations: [
    AdministrationComponent
  ],
    imports: [
        CommonModule,
        AdministrationRoutingModule,
        MenuModule
    ]
})
export class AdministrationModule { }
