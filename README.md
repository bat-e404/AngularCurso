# Angular Curso

Curso de Angular

## Gentil Introducion a Ts

Para ejecutar un archivo de ts en **CMD**

```cmd
directorio/ tsc nombreArchivo
```
Este es un ejemplo de como pasar parametros a una funcion, de como accedemos un objeto
```ts
function saludar(nombre:string){
    return nombre;
}

var wolverine = {
    nom: 'Wolverine'
};

saludar(wolverine.nom);
```

## Instalacion de Angular

```bash
npm install -g @angular/cli
```

## Creacion de un nuevo proyecto
```cmd
ng new MyApp
cd MyApp
ng serve
```
## Recomendacion

Cunado creamos un proyecto nuevo podemos crear una carpeta llamada components y vamos creando los componentes

## App.modulo.ts

Este archivo esta conformado por varias partes del codigo que se deven saber
```ts
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

```
## Componentes

Es una parte espesifica que va a realizar una funcion espesifica en la web

### Creacion de un componente 

```cdm
ng g c componets/nombreComponete 
```
