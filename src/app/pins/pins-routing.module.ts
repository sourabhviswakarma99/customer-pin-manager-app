import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinListComponent } from './pin-list/pin-list.component';

const routes: Routes = [
  { path: '', component: PinListComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinsRoutingModule { }
