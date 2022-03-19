import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './product';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8086/products";

//   private baseURL = "http://localhost:9191/products"

  constructor(private httpClient: HttpClient) { }

  createProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, product);
   }

   getproductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  getProductById(id:number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(id:number, product:Product):Observable<Product>{
    return this.httpClient.put<Product>(`${this.baseURL}/${id}`,product);
  }

  deleteProduct(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}


