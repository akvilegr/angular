import { NgModule } from '@angular/core';
import { HomeComponent } from './container/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class HomeRoutingModule { }
