import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './container/background/background.component';

@NgModule({
  declarations: [

    BackgroundComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BackgroundComponent],
})
export class CoreModule { }
