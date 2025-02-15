import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
   products:Product[]=[]
   filter:any
   constructor(private productService:ProductService,
    private route:ActivatedRoute

   ){}

   ngOnInit(){
    this.productService.getAllProducts().subscribe(productsList=>{
      this.products=productsList;
    })
    this.route.queryParamMap.subscribe(params => {
      this.filter=params.get('category');
    });
   }

   getFilteredProducts(){
    return this.filter===null||this.filter==="All"?this.products:this.products.filter((p)=>p.category===this.filter);
   }
    
   
}
