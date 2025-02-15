import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-filter',
  imports: [RouterLink],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {
   categories:String[]=[]
   constructor(private productService:ProductService){}
   ngOnInit(){
      this.productService.getCategories().subscribe(categoriesList=>{
          this.categories=['All',...categoriesList];
        }
      )
   }
}
