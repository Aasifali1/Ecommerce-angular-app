import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order'
import { Observable } from 'rxjs';
import { Product } from './product';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = "http://localhost:8087/orders"
  private baseUrl2 = "http://localhost:8090/payment"

  // private baseUrl = "http://localhost:9191/orders"
  order:Order = new Order();
  constructor(private httpClient:HttpClient) { }

  getOrderList():Observable<Order[]> {
     return this.httpClient.get<Order[]>(`${this.baseUrl}`);
  }

  placeOrder(product:Product,customerId:number):Observable<Object>{
    console.log("customer",customerId);
    this.order.customerId = customerId;
    this.order.amount = product.price;
    this.order.orderStatus = "pending";
    this.order.productId = product.id;
    this.order.quantity = 1;
    console.log(this.order);
    return this.httpClient.post(`${this.baseUrl}`,this.order);
  }

  getPaymentByOrderId(orderId:number): Observable<Payment>{
    return this.httpClient.get<Payment>(`${this.baseUrl2}/${orderId}`);
  }

  getOrderById(orderId:number): Observable<Order>{
    return this.httpClient.get<Order>(`${this.baseUrl}/${orderId}`);
  }

  test(id:number):Observable<Payment>{
    return this.httpClient.get<Payment>(`${"http://localhost:8099/checkout"}/${id}`);
  }
}
