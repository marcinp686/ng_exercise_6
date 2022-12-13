import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  private productsUrl : string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  // Products data --------------------
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl+'/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl+`/products/${id}`);
  }
  
  createProduct(product: Product) : Observable<any> {  
    return this.http.post(this.productsUrl, product);
  }

  deleteProduct(id: number) : Observable<any> {
    return this.http.delete(this.productsUrl+`/products/${id}`)
  }
}
