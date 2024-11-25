import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private productService: ProductService){
    productService.getAllProducts().subscribe(value=>{
      console.log(value);      
    })
  }
}
