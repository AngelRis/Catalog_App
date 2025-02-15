import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';

export const routes: Routes = [
    {  path:'',
       pathMatch:'full',
       component:HomePageComponent,
       title:'Home'
    },
    {
        path:'catalog',
        component:CatalogPageComponent,
        title:'Catalog'
    },
    
];
