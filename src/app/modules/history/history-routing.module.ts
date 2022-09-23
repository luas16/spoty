import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

const routes: Routes = [
  {
    path: '',//!raiz de las canciones
    component: HistoryPageComponent,
    //! se le indica el nombre del oulet que se utilizara
    outlet: 'amarillo'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
