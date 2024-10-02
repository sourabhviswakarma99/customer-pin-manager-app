import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private localStorageKey = 'customerData';

  constructor(private http: HttpClient) {}

  saveCustomerData(data: any) {
    const existingData = this.getCustomerData() || [];
    existingData.push(data);
    localStorage.setItem(this.localStorageKey, JSON.stringify(existingData));
  }


  getCustomerData(): any[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }
  

  getRegions(): Observable<any[]> {
    return this.http.get('/assets/regions.json').pipe(
      map((data: any) => {
        const regions = new Set<string>();
        Object.values(data.data).forEach((country: any) => {
          regions.add(country.region);
        });
        return Array.from(regions); 
      })
    );
  }


  getCountries(regionName: string): Observable<any[]> {
    return this.http.get('/assets/regions.json').pipe(
      map((data: any) => {
        const countries = Object.values(data.data).filter(
          (country: any) => country.region === regionName
        );
        return countries;
      })
    );
  }

}
