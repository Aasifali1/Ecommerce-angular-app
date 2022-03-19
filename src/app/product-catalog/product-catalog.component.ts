import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  customerId:number;
  products:Product[];

  constructor(private productService:ProductService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductCatalog();
    this.customerId = this.route.snapshot.params['id'];
    console.log(this.customerId);
  }

  private getProductCatalog(){
    this.productService.getproductsList().subscribe(data=>{
      // console.log(data);
      this.products = data;
    })
  }

  buyNow(id:number){
    console.log(id);
    this.router.navigate(['/place-order',id,this.customerId]);
  }



  // updateProduct(id:number){
  //   console.log(id);
  //   this.router.navigate(['/update-product',id]);   //.then(result => {  window.open("/update-product", '_blank'); });
  // }

  // deleteProduct(id:number){
  //   this.productService.deleteProduct(id).subscribe(data=>{
  //     console.log(data);
  //     this.getProducts();
  //   })
  // }

}
