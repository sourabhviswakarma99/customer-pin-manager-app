import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PinFormComponent } from './pin-form/pin-form.component';

@NgModule({
  declarations: [
    PinFormComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSelectModule
  ],
  exports: [
    PinFormComponent,
    CustomerFormComponent
  ]
})
export class SharedModule { }