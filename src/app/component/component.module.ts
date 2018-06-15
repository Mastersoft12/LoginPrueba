import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RadioNgModelComponent} from './radio-ng-model/radio-ng-model.component';
import {SharedModule} from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';
import { SelectOverviewComponent } from './select-overview/select-overview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [RadioNgModelComponent, RouterModule],
  declarations: [RadioNgModelComponent, LayoutComponent, SelectOverviewComponent]
})
export class ComponentModule { }
