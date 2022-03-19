import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from './customer';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = "http://localhost:8085/api/v1/customers";

  // private baseURL = "http://localhost:9191/customers"

  constructor(private httpClient: HttpClient) { }

  createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, customer);
   }

   getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }
//   deleteCustomer(): Observable<Customer[]>{
//       return this.httpClient.get<Customer[]>(`${this.baseURL}`+'/all');
//   }
}


