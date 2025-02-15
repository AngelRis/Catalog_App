import { Component, inject } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { FavoriteProductCardComponent } from "../favorite-product-card/favorite-product-card.component";
import { MatDialogModule} from '@angular/material/dialog'
@Component({
  selector: 'app-favorite-list',
  imports: [FavoriteProductCardComponent,MatDialogModule],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})
export class FavoriteListComponent {
  favoritesService=inject(FavoritesService);
}
