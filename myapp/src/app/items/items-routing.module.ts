import { NgModule } from '@angular/core';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './containers/add/add.component';
import { ListItems2Component } from './containers/list-items2/list-items2.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: 'list2', component: ListItems2Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
