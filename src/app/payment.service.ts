import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = "http://localhost:8090/"
  order:Order = new Order();

  constructor() { }


  
}
