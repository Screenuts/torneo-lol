import { TorneoService } from './../../../core/services/torneo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettaglio-torneo',
  templateUrl: './dettaglio-torneo.component.html',
  styleUrls: ['./dettaglio-torneo.component.css']
})
export class DettaglioTorneoComponent implements OnInit {

  constructor(private torneoService: TorneoService) { }

  ngOnInit() {
  }

  getCodiceTorneo(): string {
    return this.torneoService.getCodiceTorneo();
  }

}
