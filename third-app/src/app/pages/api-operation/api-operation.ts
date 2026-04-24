import { Component, signal } from '@angular/core';
import { ApiService } from './api-service';
import { CommonModule } from '@angular/common';
import { Product } from './productDataType';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-operation',
  imports: [CommonModule, RouterLink],
  templateUrl: './api-operation.html',
  styleUrl: './api-operation.css',
})
export class ApiOperation {
  productData = signal<Product[]>([]);
  constructor(private productApiService: ApiService) {}
  ngOnInit() {
    this.productApiService.getProducts().subscribe((data) => {
      console.log(data.products);
      this.productData.set(data.products);
    });
  }
}
