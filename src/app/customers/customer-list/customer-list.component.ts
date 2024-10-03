import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: any[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomerData();
  }

}
