import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
   }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
  getCategories():Observable<String[]>{
    return this.http.get<String[]>('https://fakestoreapi.com/products/categories')
  }
}
