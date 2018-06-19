import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RadioNgModelComponent} from './radio-ng-model/radio-ng-model.component';
import {SelectOverviewComponent} from './select-overview/select-overview.component';
import {SlideComponent} from './slide/slide.component';


const routes: Routes = [
  { path: 'heroes',
    component: RadioNgModelComponent ,
    children: [
      { path: 'food', component: SelectOverviewComponent }
    ]},
  { path: 'slide',
    component: SlideComponent ,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingComponet { }
