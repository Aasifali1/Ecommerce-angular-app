import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service'
import { Order } from '../order'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders:Order[];

  constructor(private orderService:OrderService) { }
  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders(){
    this.orderService.getOrderList().subscribe(data=>{
      this.orders = data;
    });
  }
}
