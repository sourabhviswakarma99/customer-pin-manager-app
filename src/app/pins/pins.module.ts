import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name'
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxSelectModule.forRoot(CustomSelectOptions)
  ]
})
export class PinsModule { }
