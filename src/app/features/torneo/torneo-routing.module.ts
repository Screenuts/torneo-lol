import { DettaglioTorneoComponent } from './dettaglio-torneo/dettaglio-torneo.component';
import { HomeTorneoComponent } from './home-torneo/home-torneo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeTorneoComponent
  },
  {
    path: 'dettaglio-torneo/:codiceTorneo',
    component: DettaglioTorneoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorneoRoutingModule { }
