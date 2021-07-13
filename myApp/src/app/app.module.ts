import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Componentes

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';

//Servicios

@NgModule({
 // Componentes y pipes
  declarations: [
    AppComponent,
    HeaderComponent
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
