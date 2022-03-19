import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  constructor(private orderService:OrderService,
    private route:ActivatedRoute) { }

  processed: string;
  shipped: string;
  dispatch: string;
  enroute: string;
  arrived: string;

  trackStatus:string[];
  orderId:number;
  order:Order = new Order();


  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['id'];
    console.log("order id "+this.orderId);
    this.processed = "active";

    this.orderService.getOrderById(this.orderId).subscribe(data =>{
      console.log(data);
      this.order = data;
      this.statusSet(this.order.orderTrack);
    }, error => console.log(error));
  }

  statusSet(tracking: string) {
    console.log("trackkkkk",tracking);
    if(tracking == "Shipped"){
      this.shipped = "active";
    }else if (tracking === "Dispatched") {
      this.shipped = "active";
      this.dispatch = "active";
    }else if(tracking === "En Route"){
      this.shipped = "active";
      this.dispatch = "active";
      this.enroute = "active";
    }
    else if(tracking === "Arrived"){
      this.shipped = "active";
      this.dispatch = "active";
      this.enroute = "active";
      this.arrived = "active";
    }
  }
}
