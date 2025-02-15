import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites=signal<Product[]>([]);

  constructor() { }

  addToFavorite(product:Product){
    this.favorites.set([...this.favorites(),product]);
  }
  removeProduct(id:number){
    this.favorites.set(this.favorites().filter((p)=>p.id!==id));
  }
}
