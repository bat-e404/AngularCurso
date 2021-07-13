import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/app/app-routing.module';

//Componentes

import { AppComponent } from './components/app/app.component';

//Servicios

@NgModule({
 // Componentes y pipes
  declarations: [
    AppComponent
  ],
  // Modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Servicios
  providers: [],
  //Compoente principal 
  bootstrap: [AppComponent]
})
export class AppModule { }
