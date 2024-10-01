import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PinFormComponent } from './pin-form/pin-form.component';



@NgModule({
  declarations: [
    CustomerFormComponent,
    PinFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
