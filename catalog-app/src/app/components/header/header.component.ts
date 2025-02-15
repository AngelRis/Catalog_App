import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { MatDialog, MatDialogModule} from '@angular/material/dialog'
import { FavoriteListComponent } from '../favorite-list/favorite-list.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent,RouterLink,MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  favoritesService=inject(FavoritesService);
  constructor(private dialog:MatDialog){}
  showFavorites(){
    this.dialog.open(FavoriteListComponent,{
      maxWidth:'1000px',
      enterAnimationDuration:'400ms',
      exitAnimationDuration:'400ms'
    });
    
  }
  
}
