import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  color: string;

  constructor() {
    this.color = 'white';
  }
}
