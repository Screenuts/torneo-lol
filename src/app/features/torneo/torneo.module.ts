import { FormsModule } from '@angular/forms';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorneoRoutingModule } from './torneo-routing.module';
import { HomeTorneoComponent } from './home-torneo/home-torneo.component';
import { DettaglioTorneoComponent } from './dettaglio-torneo/dettaglio-torneo.component';
import { TabellaTorneiDisponibiliComponent } from './tabella-tornei-disponibili/tabella-tornei-disponibili.component';

@NgModule({
  declarations: [HomeTorneoComponent, DettaglioTorneoComponent, TabellaTorneiDisponibiliComponent],
  imports: [
    CommonModule,
    TorneoRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class TorneoModule { }
