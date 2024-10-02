import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm!: FormGroup;
  regions: string[] = [];
  countries: any[] = [];

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required],
      country: ['', Validators.required],
    });

    this.loadRegions();
    this.customerForm.get('region')?.valueChanges.subscribe((regionName: string) => {
      this.loadCountries(regionName);
    });
  }

  loadRegions() {
    this.customerService.getRegions().subscribe((regions: string[]) => {
      this.regions = regions;
    });
  }

  loadCountries(regionName: string) {
    this.customerService.getCountries(regionName).subscribe((countries: any[]) => {
      this.countries = countries;
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const customerData = this.customerForm.value;
      this.customerService.saveCustomerData(customerData);
      console.log('Customer Data Saved:', customerData);
      this.router.navigate(['/pins']);
    }
  }

}
