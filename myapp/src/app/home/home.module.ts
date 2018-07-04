import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home/home.component';
import { PageNotFoundComponent } from '../page-not-found/container/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
