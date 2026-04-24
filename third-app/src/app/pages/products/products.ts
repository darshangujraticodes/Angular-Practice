import { Component, signal, WritableSignal } from '@angular/core';
import { ProductServices } from './product-services';
import { CommonModule } from '@angular/common';

interface products {
  id: number;
  name: string;
  price: number;
  company: string;
  warranty_available: boolean;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  itProducts = signal<products[]>([]);

  constructor(private productService: ProductServices) {}
  // ngOnInit() {
  //   const data = this.productService.productList();
  //   console.log(data);

  //   this.itProducts.set(data);
  // }

  loadItProducts() {
    const data = this.productService.productList();
    // console.log(data);
    this.itProducts.set(data);
  }

  hideItProducts() {
    this.itProducts.set([]);
  }
}
