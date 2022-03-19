import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];

  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getproductsList().subscribe(data=>{
      // console.log(data);
      this.products = data;
    })
  }

  updateProduct(id:number){
    console.log(id);
    this.router.navigate(['/update-product',id]);   //.then(result => {  window.open("/update-product", '_blank'); });
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.getProducts();
    })
  }
}
