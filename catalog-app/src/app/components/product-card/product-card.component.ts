import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
   product=input.required<Product>();
   favoritesService=inject(FavoritesService);

   isFavorite(id:number){
    return this.favoritesService.favorites().some((p)=>p.id===id);
   }
}
