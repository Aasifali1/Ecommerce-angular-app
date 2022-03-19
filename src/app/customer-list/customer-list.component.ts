import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service'
import { Customer } from '../customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  constructor(private customerService: CustomerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCustomers();
    //      this.getProducts();
  }
  private getCustomers() {
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });
  }

  getProductCatalog(id:number){
    this.router.navigate(['/product-catalog',id]); //.then(result => { window.open("/product-catalog", '_blank'); });
  }
}
