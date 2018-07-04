import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/container/home/home.component';
import { ListItemsComponent } from './items/containers/list-items/list-items.component';
import { PageNotFoundComponent } from './page-not-found/container/page-not-found/page-not-found.component';

// TODO: découper routes pour chaque module

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListItemsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
