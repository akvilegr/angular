import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// TODO: découper routes pour chaque module

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true
      }
    )
  ]
})
export class AppRoutingModule { }
