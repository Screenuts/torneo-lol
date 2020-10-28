import { Router } from '@angular/router';
import { UsernameService } from './../../../core/services/username.service';
import { TorneoService } from './../../../core/services/torneo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-torneo',
  templateUrl: './home-torneo.component.html',
  styleUrls: ['./home-torneo.component.css']
})
export class HomeTorneoComponent implements OnInit {

  codiceTorneo: string;
  torneoTrovato: boolean;
  cercaBoolean: boolean;
  nuovoBoolean: boolean;

  constructor(
    private router: Router,
    private torneoService: TorneoService,
    private usernameService: UsernameService) {
  }

  ngOnInit() {
  }

  getUsername(): string {
    return this.usernameService.getUsername();
  }

  getCodiceTorneo() {
    return this.torneoService.getCodiceTorneo();
  }

  cercaTorneo() {
    this.cercaBoolean = true;
    this.nuovoBoolean = false;
    this.torneoTrovato = this.torneoService.cercaCodiceTorneo(this.codiceTorneo);
    if (this.torneoTrovato) {
      this.torneoService.setCodiceTorneo(this.codiceTorneo);
      this.routeToDettaglio(this.getCodiceTorneo());
    }

  }

  creaNuovoTorneo() {
    this.nuovoBoolean = true;
    this.cercaBoolean = false;
    this.torneoService.setCodiceTorneo(this.torneoService.newRandomCodiceTorneo());
    this.routeToDettaglio(this.getCodiceTorneo());
  }

  routeToDettaglio(codiceTorneo) {
    this.router.navigate([`torneo`, 'dettaglio-torneo', codiceTorneo]);
  }
}
