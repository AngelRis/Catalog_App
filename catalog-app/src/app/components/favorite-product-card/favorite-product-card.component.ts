import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorite-product-card',
  imports: [CommonModule],
  templateUrl: './favorite-product-card.component.html',
  styleUrl: './favorite-product-card.component.css'
})
export class FavoriteProductCardComponent {
   product=input.required<Product>();
   favoritesService=inject(FavoritesService)
}
