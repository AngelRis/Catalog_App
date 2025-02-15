import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { CategoryFilterComponent } from "../category-filter/category-filter.component";

@Component({
  selector: 'app-catalog-page',
  imports: [ProductListComponent, CategoryFilterComponent],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {

}
