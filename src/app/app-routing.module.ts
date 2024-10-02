import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './shared/customer-form/customer-form.component';
import { PinFormComponent } from './shared/pin-form/pin-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/pins', pathMatch: 'full' }, 
  { path:'add-customer', component: CustomerFormComponent },
  { path:'add-pin', component: PinFormComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'pins', loadChildren: () => import('./pins/pins.module').then(m => m.PinsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
