import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-receipt',
  templateUrl: './order-receipt.component.html',
  styleUrls: ['./order-receipt.component.css']
})
export class OrderReceiptComponent implements OnInit {

  productId:number;
  orderId:number;
  order:Order = new Order();
  product: Product = new Product();
  trackStatus: string[];

  constructor(private route:ActivatedRoute, 
    private orderService:OrderService,
    private productService:ProductService,
    private router:Router ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['id'];
    console.log("order id "+this.orderId);
    this.getOrderById(this.orderId);
    this.productId = this.order.productId;
    this.alertWithSuccess();
  }

  getOrderById(orderId:number){
    this.orderService.getOrderById(this.orderId).subscribe(data =>{
      console.log(data);
      this.order = data;
      this.productId = this.order.productId;
      console.log("found: order ",this.order);
      console.log("productid: ",this.productId);
      this.getProductById(this.productId);
    }, error => console.log(error));
  }

  getProductById(productId:number){
    this.productService.getProductById(this.productId).subscribe(data =>{
      this.product = data;
      console.log(data);
    }, error => console.log(error));
  }

  alertWithSuccess(){
    Swal.fire('Payment Successful', 'Your payment successfully received!', 'success')
  }

  trackOrder(id:number){
    this.router.navigate(['/track-order',id]);
  }
}
