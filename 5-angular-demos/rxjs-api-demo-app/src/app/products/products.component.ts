import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsList: Product[] = []
  constructor(private productService: ProductService){
    productService.getAllProducts().subscribe(value=>{
      // console.log(value)
      this.productsList = value      
    })
  }
}
