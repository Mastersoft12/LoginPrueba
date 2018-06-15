import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RadioNgModelComponent} from './component/radio-ng-model/radio-ng-model.component';
import {SelectOverviewComponent} from './component/select-overview/select-overview.component';

const routes: Routes = [
  { path: 'heroes', component: RadioNgModelComponent },
  { path: 'food', component: SelectOverviewComponent },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
