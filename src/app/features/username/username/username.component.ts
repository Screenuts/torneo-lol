import { Router } from '@angular/router';
import { UsernameService } from './../../../core/services/username.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username: string;

  constructor(
    public usernameService: UsernameService,
    private router: Router) {
  }

  ngOnInit() {
    this.username = this.usernameService.getUsername();
  }

  submit() {
    this.usernameService.setUsername(this.username);
    this.router.navigate([`torneo`]);
  }
}
