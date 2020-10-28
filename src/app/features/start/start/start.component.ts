import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {



  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  click() {
    this.router.navigate([`username`]);
  }


}
