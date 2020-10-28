import { FormsModule } from '@angular/forms';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsernameRoutingModule } from './username-routing.module';
import { UsernameComponent } from './username/username.component';

@NgModule({
  declarations: [UsernameComponent],
  imports: [
    CommonModule,
    UsernameRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class UsernameModule { }
