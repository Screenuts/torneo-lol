import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  codiceTorneo: string;
  arrayNuoviCodiciTorneoRandom: string[];
  arrayCodiciTorneo: string[];

  constructor() {

    this.arrayNuoviCodiciTorneoRandom = [
      'torneone',
      'caccamone',
      'pomelone'
    ];
    this.arrayCodiciTorneo = this.arrayNuoviCodiciTorneoRandom;

  }

  getCodiceTorneo(): string {
    return this.codiceTorneo;
  }

  setCodiceTorneo(codiceTorneo: string) {
    this.codiceTorneo = codiceTorneo;
  }

  newRandomCodiceTorneo(): string {
    const randomNumber = Math.floor(Math.random() * this.arrayNuoviCodiciTorneoRandom.length);
    return this.arrayNuoviCodiciTorneoRandom[randomNumber];
  }

  cercaCodiceTorneo(codice: string) {
    return this.arrayCodiciTorneo.indexOf(codice) !== -1 ? true : false;
  }
}
