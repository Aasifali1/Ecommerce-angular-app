import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-payment-service',
  templateUrl: './payment-service.component.html',
  styleUrls: ['./payment-service.component.css']
})
export class PaymentServiceComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    const stripe = "pk_test_51I7CQGBrWZwtH9l2Dxe7sTdte807jt97dihtVTkrGz5NENkoRK0mkSqoXkHxjy3N3GeiFnYyowDrrFurbrLyj5TR00k2J0Srp0";

    // const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zpk_test_51I7CQGBrWZwtH9l2Dxe7sTdte807jt97dihtVTkrGz5NENkoRK0mkSqoXkHxjy3N3GeiFnYyowDrrFurbrLyj5TR00k2J0Srp0dp7dc');

 
  let elements;
  
  initialize();
  // checkStatus();
  
  // document
  // .querySelector("#payment-form")
  // .addEventListener("submit", handleSubmit);

      // Fetches a payment intent and captures the client secret


  // placeOrder(product:Product,customerId:number):Observable<Object>{
  //   console.log("customer",customerId);
  //   this.order.customerId = customerId;
  //   this.order.amount = product.price;
  //   this.order.orderStatus = "pending";
  //   this.order.productId = product.id;
  //   this.order.quantity = 1;
  //   console.log(this.order);
  //   return this.httpClient.post(`${this.baseUrl}`,this.order);
  // }

        async function initialize() {
           // The items the customer wants to buy
      const items = [{ id: "xl-tshirt" }];
      var purchase = {
               amount:100,
               email:"email@gmail.com"
             };

          
    
      console.log(purchase);

        const headers = new HttpHeaders( { "Content-Type": "application/json" });

        this.httpClient.post('http://localhost:8090/create-payment-intent', JSON.stringify({ items }), {headers: headers});
         
        // .subscribe(resp => {
        //     console.log(resp);
        //   })
      
    // const response = await fetch("http://localhost:8090/create-payment-intent", {
    // method: "POST",
    // headers: { "Content-Type": "application/json" },
    // ,
    // });
    // const { clientSecret } = await response.json();
    
    
    const appearance = {
    theme: 'night',
    labels: 'floating'
    };
    
    // Pass the appearance object to the Elements instance
    // elements = stripe.elements({ appearance, clientSecret });
    
    // const paymentElement = elements.create("payment");
    // paymentElement.mount("#payment-element");
    }
  }

  pay(){
    window.location.href = 'https://stackoverflow.com/questions/34338440/how-to-redirect-to-an-external-url-in-angular2';
    console.log("running.....");
  }

  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        this.chargeCard(token);
      } else {
        console.log(response.error.message);
      }
    });
  }

  chargeCard(token: string) {
    const headers = new HttpHeaders({'token': token});
    this.httpClient.post('http://localhost:8089/payment/charge', {'amount': 100}, {headers: headers})
      .subscribe(resp => {
        console.log(resp);
      })
  }


}
