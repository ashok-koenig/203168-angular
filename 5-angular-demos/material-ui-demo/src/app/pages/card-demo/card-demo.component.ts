import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './card-demo.component.html',
  styleUrl: './card-demo.component.css'
})
export class CardDemoComponent {
productList: Product[] = []
  constructor(private productService: ProductService){
    productService.getAllProducts().subscribe((data)=>{
      this.productList = data;
    })
  }
}
