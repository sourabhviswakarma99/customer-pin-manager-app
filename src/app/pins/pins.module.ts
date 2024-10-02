import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PinsRoutingModule } from './pins-routing.module';
import { PinListComponent } from './pin-list/pin-list.component';

@NgModule({
  declarations: [
    PinListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PinsRoutingModule,
  ]
})
export class PinsModule { }
