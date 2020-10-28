import { BackgroundService } from './../../services/background.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(public backgroundService: BackgroundService) { }

  ngOnInit() {
  }

}
