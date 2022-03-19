import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  id:number;
  customerId:number;
  product:Product = new Product();
  // order:Order = new Order();
order:any;
  products: Product[];
  constructor(private productService:ProductService,
    private orderService:OrderService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerId = this.route.snapshot.params['customerId'];
    this.productService.getProductById(this.id).subscribe(data =>{
      this.product = data;
    }, error => console.log(error));
  }

  placeOrder(id:number, customerId:number){
    console.log(this.id,this.customerId);
    this.orderService.placeOrder(this.product, this.customerId).subscribe(data=>{
      console.log("placed",data);
      this.order = data;
      // this.getPaymentByOrderId(this.order.id);
      window.location.href = 'http://localhost:8089/checkout/'+this.order.id; 
      // window.location.href = 'http://localhost:9191/checkout/'+this.order.id;   
  
      // this.getOrderByStripeId(this.order.id);
      this.goToProductCatalog();
    });
  }

  private goToProductCatalog(){
    this.productService.getproductsList().subscribe(data=>{
      console.log(data);
      this.products = data;
    })
  }

  getPaymentByOrderId(orderId:number){
    this.orderService.getPaymentByOrderId(orderId).subscribe(data=>{
      // window.location.href = 'http://localhost:8089/'+data.id;
      console.log("found Order: "+data);
    })
  }

}
