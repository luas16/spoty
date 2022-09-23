import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { ExampleComponent } from './example/example.component';

//dentro de este array declararemos nuestras primeras rutas
const routes: Routes = [
  // !CREAMOS nuestra primera ruta
{
  path: 'auth', //TODO: localhost:4200/<---
  //** cuando se utiliza el component no utilizamos el lazyLoading es valido para aplicaciones pegueñas
  //component:ExampleComponent
  //? se utiliza el loadChildren() => import() para aplicaciones grandes
  //? se importara la ruta de los modulos a utilizar
  loadChildren:() => import('./modules/auth/auth.module').then(module => module.AuthModule) //! estamos diciendo que el la ruta raiz va a cargar el modulo de HomeModule

// !podemos agregar mas rutas dentro de llaves, el path que sera la direccion y
// !el component que indica que componente se utilizara para su ejecucion o loadChildren
},
{
  path: '',
  component: HomePageComponent,
  loadChildren: () => import('@modules/home/home.module').then(module => module.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
