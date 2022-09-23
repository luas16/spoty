import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
//! se establecen los objetos y propiedades de este para poder utilizarlas dinamicamente
//! Objeto1 = mainMenu, propiedades=defaulOptions y access link que son arrays vacias
//! Objeto2 o variable = customOptins que es un array vacio, y asi podemos agregar mas objetos
  mainMenu:{
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {defaultOptions: [], 
       accessLink:[]}

  customOptions: Array<any> = []

  constructor() { }
//! Este es el primer ciclo que se ejecuta despeus de constructor
//! una de sus funciones principales es llenar datos/variables
  ngOnInit(): void {
    //! aca podemos observar los valores o datos con los que se llenaran cada uno de los objetos repectivamente
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

  }

}
