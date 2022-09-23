import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,       //modulo comun de angular
    HomeRoutingModule,  //modulo propio de routing
    SharedModule //!importamos este modulo para poder utilizar los componentes que tiene 
  ]
})
export class HomeModule { }
