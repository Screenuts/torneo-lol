import { CoreModule } from './../../core/core.module';
import { StartRoutingModule } from './start-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    CoreModule,
    StartRoutingModule,
  ]
})
export class StartModule { }
